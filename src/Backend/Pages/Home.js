import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../Function/Context";
import { db } from "../../Utils/Firebase";
import Navbar from "../Components/Navbar";
import { Editor } from "@tinymce/tinymce-react";
import Loader from "../../Components/Others/Loader";

const initialState = {
  title: "",
  caption: "",
  aboutDescription: "",
};

const Home = () => {
  const { user, navigate, loader, setloader } = useGlobalContext();

  const [form, setform] = useState(initialState);

  useEffect(() => {
    getHomepageDetails();
  }, []);

  const getHomepageDetails = async () => {
    setloader(true);

    const docRef = doc(db, "Homepage", "r6rmpJdjIO6MRhv8yWOU");
    const blogDetail = await getDoc(docRef);
    setform(blogDetail.data());

    setloader(false);
  };

  const { title, caption, aboutDescription } = form;

  const editorRefAboutDesription = useRef(null);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editorRefAboutDesription.current.getContent().length > 1) {
      if (title && caption) {
        try {
          await updateDoc(doc(db, "Homepage", "r6rmpJdjIO6MRhv8yWOU"), {
            ...form,
            aboutDescription: editorRefAboutDesription.current.getContent(),
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Home successfully updated");
        } catch (err) {
          console.log(err);
        }
      } else {
        return toast.error("All fields must be filled");
      }
      navigate("/");
    } else {
      return toast.error("All fields must be filled");
    }
  };

  return (
    <div className="bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 py-1 pb-4 h-full dashboard">
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
              Home
            </h6>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="m-3">
            <div className="flex  flex-col  my-[30px]  text-[14px]">
              <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                Hero Section
              </h6>

              <div className="grid grid-cols-1 gap-3 my-[10px]">
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="Title"
                  required
                  className="border py-[18px] px-[25px] text-[14px] w-full"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 my-[10px]">
                <textarea
                  placeholder="Caption"
                  name="caption"
                  value={caption}
                  onChange={handleChange}
                  required
                  className="border py-[18px] px-[25px] text-[14px]  
                    "
                  rows="10"
                />
              </div>
            </div>
          </div>
          <div className="mx-3">
            <div className="flex  flex-col  my-[10px]  text-[14px]">
              <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                About Section
              </h6>

              <div className="grid grid-cols-1 gap-3 my-[10px]">
                <Editor
                  apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
                  onInit={(evt, editor) =>
                    (editorRefAboutDesription.current = editor)
                  }
                  initialValue={aboutDescription}
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

export default Home;
