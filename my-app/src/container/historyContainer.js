import React from "react";

export default class HistoryContainer extends React.Component {
  render() {
    var self = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ];
    return (
      <div
        style={{
          padding: (window.innerHeight * 10) / 100,
          width: "100%",
          height: window.innerHeight,
          backgroundImage: `url(${"https://www.ecopetit.cat/wpic/mpic/101-1013587_android-green-background-hd-desktop-wallpaper-background-hd.jpg"})`
        }}
      >
        <h6>
          <strong> {"Service History"} </strong>
        </h6>
        <table>
          <tbody
            style={{
              minWidth: "300px",
              maxWidth: "500px",
              overflow: "auto",
              maxHeight: "500px",
              display: "block",
              backgroundColor: "#FFF"
            }}
          >
            {self.map((value, index) => (
              <tr>
                <td> Mother {value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
