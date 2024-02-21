import { GitIcon, JSIcon, MongoIcon, NodeIcon, ReactIcon, TSIcon } from "components/renderIcon";


export function Knowledge() {
  return (
    <div>
      <h2 className="text-custom-gray font-bold text-lg px-1 inline-block mb-2">
        Knowledges
      </h2>
      
      <div className="flex justify-around">
      <MongoIcon />
      <ReactIcon />
      <GitIcon />
      <JSIcon />
      <TSIcon />
      <NodeIcon />
      </div>

    </div>
  );
}
