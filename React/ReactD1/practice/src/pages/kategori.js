import React from "react";
import Article from "./article";

export default function Category({ match }) {
  return (
    <div>
      <Article data={match.params.source_name} />
    </div>
  );
}
