import React, { useLayoutEffect, useRef, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { OrgChart } from "d3-org-chart";
import { select } from "d3-selection";
import { HierarchyNode } from "d3-hierarchy";

const d3 = { select };

export interface Datum {
  _upToTheRootHighlighted: boolean;
}

interface Props {
  data: Datum[];
  setClick: Function;
  onNodeClick: Function;
}

export default function ChartSample(props: Props) {
  console.log(OrgChart);
  const d3Container = useRef(null);
  const chart: OrgChart<Datum> = new OrgChart<Datum>();

  props.setClick((node: Datum) => chart!.addNode(node));

  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      chart
        .setActiveNodeCentered(false)
        .container(d3Container.current)
        .data(props.data)
        .onNodeClick((d) => {
          console.log(d, "Id of clicked node ");
          props.onNodeClick(d);
        })
        .nodeContent((node, index, nodes, state): string => {
          return ReactDOMServer.renderToStaticMarkup(
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #666666",
                textAlign: "center",
              }}
            >
              Sample ID {node.id}
            </div>
          );
        })
        .linkUpdate(function (d, i, arr) {
          // @ts-ignore
          d3.select(this)
            .attr(
              "stroke",
              d.data._upToTheRootHighlighted ? "#152785" : "black"
            )
            .attr("stroke-width", d.data._upToTheRootHighlighted ? 6 : 2);
          if (d.data._upToTheRootHighlighted) {
            // @ts-ignore
            d3.select(this).raise();
          }
        })
        .layout("left")
        .compact(false)
        .nodeWidth((node: HierarchyNode<Datum>) => 150)
        .nodeHeight((node: HierarchyNode<Datum>) => 60)
        .render();
    }
  }, [props.data, props, chart]);

  return (
    <div>
      <div ref={d3Container} />
    </div>
  );
}
