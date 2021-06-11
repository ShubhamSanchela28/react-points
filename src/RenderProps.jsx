import React, { Component } from "react";

class RenderProps extends React.Component {
  render() {
    return <div>{this.props.title(false)}</div>;
  }
}



export default function RenderApp() {
  return (
    <div>
      <RenderProps title={(isIndial) => isIndial ? "Can Live in India " : "Cannot live in India"} />
    </div>
  );
}
