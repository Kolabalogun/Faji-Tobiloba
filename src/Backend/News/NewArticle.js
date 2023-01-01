import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useGlobalContext } from "../../Function/Context";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../Utils/Firebase";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const initialState = {
  title: "",
  imgUrl: "",
  description: "",
  comment: [],
};

const NewArticle = ({ handleState }) => {
  const { setloader, user, navigate, pageStateF, notification, notificationF } =
    useGlobalContext();

  const { id } = useParams();

  const [form, setform] = useState(initialState);
  const [file, setfile] = useState(null);
  const [progress, setprogress] = useState(null);
  const [dateId, setdateId] = useState("");

  const { title, imgUrl, description } = form;

  const editorRefArticleDescription = useRef(null);

  // to set timeId
  useEffect(() => {
    window.scroll(0, 0);
    const dateId = new Date().getTime();
    setdateId(dateId);
  }, []);

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

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title &&
      file &&
      editorRefArticleDescription.current.getContent().length > 1
    ) {
      setloader(true);
      try {
        await addDoc(collection(db, "Articles"), {
          ...form,
          description: editorRefArticleDescription.current.getContent(),
          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid,
          dateId: dateId,
          comment: [],
        });
        setloader(false);
        toast.success("Article added");
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    } else {
      return toast.error("All fields must be filled");
    }
    navigate("/articles");
  };

  useEffect(() => {
    id && getAriticleDetail();
    id && pageStateF("article");
  }, [id]);

  const getAriticleDetail = async () => {
    const docRef = doc(db, "Articles", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setform({ ...snapshot.data() });
    }
  };

  const updateArticle = async (e) => {
    e.preventDefault();

    if (title && editorRefArticleDescription.current.getContent().length > 1) {
      setloader(true);

      try {
        await updateDoc(doc(db, "Articles", id), {
          ...form,
          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid,
        });
        toast.success("Article updated");
        setloader(false);
      } catch (err) {
        console.log(err);
        notificationF(err);
      }
    } else {
      return toast.error("All fields must be filled");
    }
    navigate("/articles");
  };

  return (
    <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
      <div
        className="flex flex-col p-3 justify-between
"
      >
        <div className="flex justify-between items-center">
          <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold mb-1">
            Add New Article
          </h6>

          <Link to={"/admin"} onClick={pageStateF("article")}>
            <button
              onClick={handleState}
              className="px-4 py-1 text-[13px] uppercase font-semibold"
            >
              See articles
            </button>
          </Link>
        </div>

        <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className="m-3">
        <div className="flex  flex-col  my-[10px]  text-[14px]">
          <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
            Article Title
          </h6>

          <div className="grid grid-cols-1 gap-3 my-[10px]">
            <input
              type="text"
              placeholder="Ariticle Title"
              name="title"
              value={title}
              onChange={handleChange}
              required
              className="border py-[18px] px-[25px] text-[14px] w-full"
            />
          </div>

          <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
            Ariticle Thumbnail
          </h6>
          <div className="flex items-start">
            {imgUrl && (
              <div className="rounded-[10%] h-[250px]  flex justify-center items-center w-[350px] mr-[20px] relative border">
                <img
                  className="rounded-[10%] object-cover absolute  w-[100%] h-full"
                  src={imgUrl}
                  alt="faji"
                />
              </div>
            )}
            <input
              type="file"
              name="file"
              onChange={(e) => setfile(e.target.files[0])}
              placeholder="Enter Image"
              required
              className="border py-[18px] px-[25px] text-[14px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="mx-3">
        <div className="flex  flex-col  my-[10px]  text-[14px]">
          <h6 className="text-[#0d1727] text-base leading-relaxed mb-3 font-semibold ">
            Article Details
          </h6>
          <Editor
            apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
            onInit={(evt, editor) =>
              (editorRefArticleDescription.current = editor)
            }
            initialValue={description}
            init={{
              height: 650,
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

        <p className="text-red-600 text-[14px]">{notification}</p>

        {id ? (
          <button
            onClick={updateArticle}
            disabled={progress !== null && progress < 100}
            className="text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white"
          >
            UPDATE
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={progress !== null && progress < 100}
            className="text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white"
          >
            SAVE
          </button>
        )}
      </div>
    </div>
  );
};

export default NewArticle;
