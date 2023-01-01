import React, { useRef } from 'react'
import { Editor } from "@tinymce/tinymce-react";

const NewProject = ({ handleState }) => {

    const editorRefBookTitle = useRef(null);

    return (

        <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
            <div
                className="flex flex-col p-3
"
            >
                <div className="flex justify-between items-center">
                    <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold mb-1">
                        Add New Article
                    </h6>

                    <button onClick={handleState} className="px-4 py-1 text-[13px] uppercase font-semibold">See projects</button>
                </div>
                <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="m-3">
                <div className="flex  flex-col  my-[10px]  text-[14px]">
                    <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                        Project Title
                    </h6>

                    <div className="grid grid-cols-1 gap-3 my-[10px]">
                        <input
                            type="text"
                            placeholder="Project Title"
                            required
                            className="border py-[18px] px-[25px] text-[14px] w-full"
                        />
                    </div>

                    <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                        Project Thumbnail
                    </h6>


                    <input
                        type="file"
                        name=""
                        id=""
                        placeholder="Enter Image"
                        required
                        className="border py-[18px] px-[25px] text-[14px] w-full"
                    />
                    <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                        Project Image I
                    </h6>


                    <input
                        type="file"
                        name=""
                        id=""
                        placeholder="Enter Image"
                        required
                        className="border py-[18px] px-[25px] text-[14px] w-full"
                    />
                    <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                        Project Image II
                    </h6>


                    <input
                        type="file"
                        name=""
                        id=""
                        placeholder="Enter Image"
                        required
                        className="border py-[18px] px-[25px] text-[14px] w-full"
                    />
                    <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
                        Project Image III
                    </h6>


                    <input
                        type="file"
                        name=""
                        id=""
                        placeholder="Enter Image"
                        required
                        className="border py-[18px] px-[25px] text-[14px] w-full"
                    />
                </div>
            </div>
            <div className="mx-3">
                <div className="flex  flex-col  my-[10px]  text-[14px]">
                    <h6 className="text-[#0d1727] text-base leading-relaxed mb-3 font-semibold ">
                        Project Details
                    </h6>
                    <Editor
                        apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
                        onInit={(evt, editor) =>
                            (editorRefBookTitle.current = editor)
                        }
                        initialValue={'Project Details'}
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



                <button className="text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white">
                    SAVE
                </button>

            </div>
        </div>

    )
}

export default NewProject