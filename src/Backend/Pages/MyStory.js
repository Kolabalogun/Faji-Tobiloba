import { Editor } from "@tinymce/tinymce-react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../Components/Others/Loader";
import { useGlobalContext } from "../../Function/Context";
import { db, storage } from "../../Utils/Firebase";
import Navbar from "../Components/Navbar";

const initialState = {
  topText: "",
  career: "",
  education: "",
  intro: "",
  achievement: "",
  publicRef: "",
  imgUrl: "",
};

const MyStory = () => {
  const { setloader, user, loader } = useGlobalContext();

  const [form, setform] = useState(initialState);
  const [file, setfile] = useState(null);
  const [progress, setprogress] = useState(null);

  const editorRefIntro = useRef(null);
  const editorRefCareer = useRef(null);
  const editorRefEducation = useRef(null);
  const editorRefAchievement = useRef(null);
  const editorRefPubRef = useRef(null);

  const { topText, career, education, intro, achievement, publicRef, imgUrl } =
    form;

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const [dateId, setdateId] = useState("");

  useEffect(() => {
    getMyStoryDetails();
    const dateId = new Date().getTime();
    setdateId(dateId);
  }, []);

  const getMyStoryDetails = async () => {
    setloader(true);

    const docRef = doc(db, "My Story", "oic9fR5fdAu7U8gIhxhw");
    const blogDetail = await getDoc(docRef);
    setform(blogDetail.data());

    setloader(false);
  };

  useEffect(() => {
    const uploadFile = () => {
      setloader(true);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.ceil(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          toast("Upload is " + progress + "% done");

          setprogress(progress);
          switch (snapshot.state) {
            case "paused":
              toast("Upload is paused");
              break;
            case "running":
              // toast("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.error(error);
          toast.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image Uploaded");
            setform((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
      setloader(false);
    };

    file && uploadFile();
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      editorRefIntro.current.getContent().length > 1 &&
      editorRefAchievement.current.getContent().length > 1 &&
      editorRefCareer.current.getContent().length > 1 &&
      editorRefPubRef.current.getContent().length > 1 &&
      editorRefEducation.current.getContent().length > 1 &&
      topText
    ) {
      setloader(true);

      try {
        await updateDoc(doc(db, "My Story", "oic9fR5fdAu7U8gIhxhw"), {
          ...form,
          intro: editorRefIntro.current.getContent(),
          education: editorRefEducation.current.getContent(),
          career: editorRefCareer.current.getContent(),
          achievement: editorRefAchievement.current.getContent(),
          publicRef: editorRefPubRef.current.getContent(),
          topText,

          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid,
          dateId: dateId,
        });
        setloader(false);
        toast.success("Story updated");
        getMyStoryDetails();
      } catch (err) {
        console.log(err);
      }
    } else {
      return toast.error("All fields must be filled");
    }
  };

  return (
    <div className="bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 pb-4 py-1 h-full dashboard">
      <Navbar />

      {loader ? (
        <Loader />
      ) : (
        <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
          <div
            className="flex flex-col p-3
        "
          >
            <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold mb-1">
              My Story
            </h6>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="m-3">
            <div className="flex  flex-col  my-[30px]  text-[14px]">
              <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                Top Text
              </h6>

              <div className="grid grid-cols-1 gap-3 my-[10px]">
                <input
                  type="text"
                  placeholder="Title"
                  required
                  name="topText"
                  value={topText}
                  onChange={handleChange}
                  className="border py-[18px] px-[25px] text-[14px] w-full"
                />
              </div>

              <div className="flex items-start">
                <div className="rounded-[10%] h-[250px]  flex justify-center items-center w-[350px] mr-[20px] relative border">
                  <img
                    className="rounded-[10%] object-cover absolute  w-[100%] h-full"
                    src={imgUrl}
                    alt="faji"
                  />
                </div>

                <input
                  type="file"
                  name="file"
                  onChange={(e) => setfile(e.target.files[0])}
                  placeholder="Enter About Image"
                  required
                  className="border py-[18px] px-[25px] text-[14px] w-full"
                />
              </div>
            </div>
          </div>
          <div className="mx-3">
            <div className="flex  flex-col  my-[10px]  text-[14px]">
              <h6 className="text-[#0d1727] text-base leading-relaxed mb-3 font-semibold ">
                Intro
              </h6>
              <Editor
                apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
                onInit={(evt, editor) => (editorRefIntro.current = editor)}
                initialValue={intro}
                init={{
                  height: 350,
                  menu: {
                    file: {
                      title: "File",
                      items:
                        "newdocument restoredraft | preview | export print | deleteallconversations",
                    },
                    edit: {
                      title: "Edit",
                      items:
                        "undo redo | cut copy paste pastetext | selectall | searchreplace",
                    },
                    view: {
                      title: "View",
                      items:
                        "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments",
                    },
                    insert: {
                      title: "Insert",
                      items:
                        "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
                    },
                    format: {
                      title: "Format",
                      items:
                        "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
                    },
                    tools: {
                      title: "Tools",
                      items:
                        "spellchecker spellcheckerlanguage | a11ycheck code wordcount",
                    },
                    table: {
                      title: "Table",
                      items:
                        "inserttable | cell row column | advtablesort | tableprops deletetable",
                    },
                    help: { title: "Help", items: "help" },
                  },
                  plugins: ["link"],
                  mobile: {
                    menubar: true,
                    plugins: "autosave lists autolink",
                    toolbar: "undo bold italic styles",
                  },
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>

            <div className="flex  flex-col  my-[10px]  text-[14px]">
              <h6 className="text-[#0d1727] text-base leading-relaxed mb-3 mt-4 font-semibold ">
                Education
              </h6>

              <Editor
                apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
                onInit={(evt, editor) => (editorRefEducation.current = editor)}
                initialValue={education}
                init={{
                  height: 350,
                  menu: {
                    file: {
                      title: "File",
                      items:
                        "newdocument restoredraft | preview | export print | deleteallconversations",
                    },
                    edit: {
                      title: "Edit",
                      items:
                        "undo redo | cut copy paste pastetext | selectall | searchreplace",
                    },
                    view: {
                      title: "View",
                      items:
                        "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments",
                    },
                    insert: {
                      title: "Insert",
                      items:
                        "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
                    },
                    format: {
                      title: "Format",
                      items:
                        "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
                    },
                    tools: {
                      title: "Tools",
                      items:
                        "spellchecker spellcheckerlanguage | a11ycheck code wordcount",
                    },
                    table: {
                      title: "Table",
                      items:
                        "inserttable | cell row column | advtablesort | tableprops deletetable",
                    },
                    help: { title: "Help", items: "help" },
                  },
                  plugins: ["link"],
                  mobile: {
                    menubar: true,
                    plugins: "autosave lists autolink",
                    toolbar: "undo bold italic styles",
                  },
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>

            <div className="flex  flex-col  my-[10px]  text-[14px]">
              <h6 className="text-[#0d1727] text-base leading-relaxed mb-3 mt-4 font-semibold ">
                Career
              </h6>

              <Editor
                apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
                onInit={(evt, editor) => (editorRefCareer.current = editor)}
                initialValue={career}
                init={{
                  height: 350,
                  menu: {
                    file: {
                      title: "File",
                      items:
                        "newdocument restoredraft | preview | export print | deleteallconversations",
                    },
                    edit: {
                      title: "Edit",
                      items:
                        "undo redo | cut copy paste pastetext | selectall | searchreplace",
                    },
                    view: {
                      title: "View",
                      items:
                        "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments",
                    },
                    insert: {
                      title: "Insert",
                      items:
                        "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
                    },
                    format: {
                      title: "Format",
                      items:
                        "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
                    },
                    tools: {
                      title: "Tools",
                      items:
                        "spellchecker spellcheckerlanguage | a11ycheck code wordcount",
                    },
                    table: {
                      title: "Table",
                      items:
                        "inserttable | cell row column | advtablesort | tableprops deletetable",
                    },
                    help: { title: "Help", items: "help" },
                  },
                  plugins: ["link"],
                  mobile: {
                    menubar: true,
                    plugins: "autosave lists autolink",
                    toolbar: "undo bold italic styles",
                  },
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>

            <div className="flex  flex-col  my-[10px]  text-[14px]">
              <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                Achievement
              </h6>

              <Editor
                apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
                onInit={(evt, editor) =>
                  (editorRefAchievement.current = editor)
                }
                initialValue={achievement}
                init={{
                  height: 350,
                  menu: {
                    file: {
                      title: "File",
                      items:
                        "newdocument restoredraft | preview | export print | deleteallconversations",
                    },
                    edit: {
                      title: "Edit",
                      items:
                        "undo redo | cut copy paste pastetext | selectall | searchreplace",
                    },
                    view: {
                      title: "View",
                      items:
                        "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments",
                    },
                    insert: {
                      title: "Insert",
                      items:
                        "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
                    },
                    format: {
                      title: "Format",
                      items:
                        "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
                    },
                    tools: {
                      title: "Tools",
                      items:
                        "spellchecker spellcheckerlanguage | a11ycheck code wordcount",
                    },
                    table: {
                      title: "Table",
                      items:
                        "inserttable | cell row column | advtablesort | tableprops deletetable",
                    },
                    help: { title: "Help", items: "help" },
                  },
                  plugins: ["link"],
                  mobile: {
                    menubar: true,
                    plugins: "autosave lists autolink",
                    toolbar: "undo bold italic styles",
                  },
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>

            <div className="flex  flex-col  my-[10px]  text-[14px]">
              <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                Public Reference
              </h6>

              <Editor
                apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
                onInit={(evt, editor) => (editorRefPubRef.current = editor)}
                initialValue={publicRef}
                init={{
                  height: 350,
                  menu: {
                    file: {
                      title: "File",
                      items:
                        "newdocument restoredraft | preview | export print | deleteallconversations",
                    },
                    edit: {
                      title: "Edit",
                      items:
                        "undo redo | cut copy paste pastetext | selectall | searchreplace",
                    },
                    view: {
                      title: "View",
                      items:
                        "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments",
                    },
                    insert: {
                      title: "Insert",
                      items:
                        "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
                    },
                    format: {
                      title: "Format",
                      items:
                        "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
                    },
                    tools: {
                      title: "Tools",
                      items:
                        "spellchecker spellcheckerlanguage | a11ycheck code wordcount",
                    },
                    table: {
                      title: "Table",
                      items:
                        "inserttable | cell row column | advtablesort | tableprops deletetable",
                    },
                    help: { title: "Help", items: "help" },
                  },
                  plugins: ["link"],
                  mobile: {
                    menubar: true,
                    plugins: "autosave lists autolink",
                    toolbar: "undo bold italic styles",
                  },
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />

              <button
                onClick={handleSubmit}
                className="text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white"
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyStory;
