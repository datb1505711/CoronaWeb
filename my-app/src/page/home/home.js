import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Map from "../../container/maps";
import API from "../../api/api";
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      globalTotals: {
        cases: 0,
        deaths: 0,
        recovered: 0,
        updated: this.convertMilisecondToUTC(new Date().getTime()),
        active: 0
      }
    };
  }
  async componentDidMount() {
    var globalTotal = await this.getGlobalTotal();
    var countriesList = await this.getCaseWithCountry();
    await this.setState({
      globalTotals: {
        cases: globalTotal.cases,
        deaths: globalTotal.deaths,
        recovered: globalTotal.recovered,
        updated: this.convertMilisecondToUTC(globalTotal.updated),
        active: globalTotal.active
      },
      countriesList: countriesList
      // countries: {
      //   country: countries.country,
      //   // _id: countries._id,
      //   // iso2: countries.iso2,
      //   // iso3: countries.iso3,
      //   // lat: countries.lat,
      //   // long: countries.long,
      //   flag: countries.flag,
      //   cases: countries.cases,
      //   todayCases: countries.todayCases,
      //   deaths: countries.deaths,
      //   todayDeaths: countries.todayDeaths,
      //   recovered: countries.recovered,
      //   active: countries.active,
      //   critical: countries.critical,
      //   casesPerOneMillion: countries.casesPerOneMillion,
      //   deathsPerOneMillion: countries.deathsPerOneMillion,
      //   updated: countries.updated
      // }
    });
  }

  convertMilisecondToUTC(miliSecondsTime) {
    let date = new Date(miliSecondsTime); // The 0 there is the key, which sets the date to the epoch
    console.log(date);
    let result =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return result;
  }
  getGlobalTotal = async () => {
    var api = new API();
    var result = await api.getGlobalTotal();

    return result;
  };
  getCaseWithCountry = async () => {
    var api = new API();
    var result = await api.getCaseWithCountry();

    return result;
  };

  render() {
    var data = [];
    if (
      this.state.countriesList != null &&
      this.state.countriesList != "undefined"
    )
      data = this.state.countriesList;

    return (
      <div className="container">
        <div
          style={{
            padding: "10px",
            marginBottom: "10px",
            marginTop: "10px",
            tableLayout: "fixed"
          }}
          className="rounded border border-success  "
        >
          <Row style={{ tableLayout: "fixed" }}>
            <Col>
              <h5> Cases: {this.state.globalTotals.cases}</h5>
            </Col>
            <Col>
              <h5> Deaths: {this.state.globalTotals.deaths}</h5>
            </Col>
            <Col>
              <h5> Recovered: {this.state.globalTotals.recovered}</h5>
            </Col>
            <Col>
              <h5> Updated: {this.state.globalTotals.updated}</h5>
            </Col>
            <Col>
              <h5> Active: {this.state.globalTotals.active}</h5>
            </Col>
          </Row>
        </div>
        <div className="rounded border border-second  ">
          <Map data={data} />
        </div>

        <div style={{ paddingTop: "10px" }}>
          <h3> Số liệu thống kê: </h3>
        </div>
        <div className="rounded border border-second">
          {/* {console.log(a == "" ? "ike shie" : a[0] + "ẹc" + "render")} */}
          <Container
            style={{
              borderColor: "#000F",
              borderBottom: "1px solid #E7E7E7",
              padding: "5px 50px 4px 50px"
            }}
          >
            <Row>
              <Col>
                <span>Quốc gia</span>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <span>Ca nhiễm</span>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <span>Nhiễm mới</span>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <span>Hồi phục</span>
              </Col>
              <Col style={{ textAlign: "right", color: "red" }}>
                <span>Tử vong</span>
              </Col>
              <Col style={{ textAlign: "right", color: "red" }}>
                <span>Tử vong hôm nay</span>
              </Col>
            </Row>
          </Container>
          {data != "" ? (
            data.map((obj, idx) => (
              <Container
                style={{
                  borderColor: "#000F",
                  borderBottom: "1px solid #E7E7E7",
                  padding: "5px 50px 4px 50px"
                }}
              >
                <Row>
                  <Col>
                    <span>
                      <img
                        alt="country_flag"
                        style={{ width: "20px", height: "15px" }}
                        src={obj.countryInfo.flag}
                      />
                      &nbsp;{obj.country}
                    </span>
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <span>{obj.cases}</span>
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <span>{obj.todayCases}</span>
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <span>{obj.recovered}</span>
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <span>{obj.deaths}</span>
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <span>{obj.todayDeaths}</span>
                  </Col>
                </Row>
              </Container>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div style={{ padding: "20px" }} />
      </div>
    );
  }
}

export default HomePage;
