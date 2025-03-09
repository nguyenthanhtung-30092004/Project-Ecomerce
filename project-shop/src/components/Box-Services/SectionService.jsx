import React from "react";

import BoxService from "./BoxService";
import { dataServices } from "../../utils/constants/mockData";
const SectionService = () => {
  return (
    <section className="bg-gray bg-opacity-100">
      <div className="container">
        <ul className="grid grid-cols-2 lg:grid-cols-4 py-14 gap-5">
          {dataServices.map((item) => (
            <BoxService key={item.title} data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionService;
