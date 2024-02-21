export function Works() {
  return (
    <div>
      <h2 className="bg-custom-gray text-slate-200 text-lg px-1 inline-block mb-2">
        Work Experience
      </h2>

      <div className="divide-y divide-solid">
        <div className="flex justify-between px-2 hover:bg-gray-300">
          <a
            href="https://www.linkedin.com/company/skyoneplataform"
            target="_blank"
            rel="noreferrer"
          >
            <p className="font-bold">Skyone</p>
            <p>Software Developer</p>
          </a>
          <p className="text-gray-400">2021 - now</p>
        </div>
        <div className="flex justify-between px-2 hover:bg-gray-300">
          <a
            href="https://www.linkedin.com/company/codie-digital"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <p className="font-bold">Codie Digital</p>
            <p>Junior FrontEnd Developer</p>
          </a>
          <p className="text-gray-400">2020 - 2021</p>
        </div>
        <div className="flex justify-between px-2 hover:bg-gray-300">
          <a
            href="https://www.linkedin.com/company/atos/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="font-bold">Atos</p>
            <p>Infrastructure and Data Management Intern</p>
          </a>
          <p className="text-gray-400">2020</p>
        </div>
      </div>
    </div>
  );
}
