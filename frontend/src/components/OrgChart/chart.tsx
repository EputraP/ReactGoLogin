import React, { useLayoutEffect, useRef, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { OrgChart } from "d3-org-chart";
import { select } from "d3-selection";
import { HierarchyNode } from "d3-hierarchy";
import { AnyStyledComponent } from "styled-components";

const d3 = { select };

interface Datum {
  id: number;
  _upToTheRootHighlighted: string;
  name: string;
}

interface Props {
  data: Array<Datum>;
  setClick: Function;
  onNodeClick: Function;
}

export default function ChartSample(props: Props) {
  // console.log(OrgChart);
  const d3Container = useRef(null);
  const chart: OrgChart<any> = new OrgChart<any>();

  props.setClick((node: Datum) => chart!.addNode(node));

  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      chart
        .setActiveNodeCentered(false)
        .container(d3Container.current)
        .data([
          { id: "3", parentId: "", name: "Administrator" },
          { id: 4, parentId: "3", name: "Developer" },
          { id: 5, parentId: "3", name: "Busines Analys" },
          { id: 6, parentId: "3", name: "Finance" },
        ])
        .onNodeClick((d) => {
          console.log(d, "Id of clicked node ");
          props.onNodeClick(d);
        })
        .nodeContent((node, index, nodes, state): any => {
          return ReactDOMServer.renderToStaticMarkup(
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #666666",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {node.data.name}
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
        //.layout("top")
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
