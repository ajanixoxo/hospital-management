import { useDropzone } from "react-dropzone";

export default function FileUpload() {
  const { getRootProps, getInputProps } = useDropzone();
  // const { acceptedFiles } = useDropzone();

  //   const files = acceptedFiles.map((file: any) => (
  //     <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //     </li>
  //   ));

  return (
    <section className="container border-2 p-5 rounded-xl border-_ border-dotted">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="flex space-x-2 items-center">
          <button className="rounded-2xl bg-blue-500 text-white px-8 py-1.5">
            Upload
          </button>
          <p className="text-neutral-700"> or drag and drop files here</p>
        </div>
      </div>
      {/* <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside> */}
    </section>
  );
}
