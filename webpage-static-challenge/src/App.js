import "./App.css";

function SmallBlock({ desc1, desc2 = "" }) {
  return (
    <div className="div3_1_1">
      <p className="pSubheader">
        {desc1}
        <br />
        {desc2}
      </p>
      <p className="pText">
        Sample text. Lorem ipsum dolor sit <br />
        amet, consectetur adipiscing elit
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <section className="section1">
        <div className="div1">
          <h1>
            Business and <br /> Industrial Parks
          </h1>
          <img
            className="imgGreyFactory"
            src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/703a678ca89059dab5d01f0d/1940.jpg"
            alt="Grey Factory"
          />
          <div className="div1_1">
            <img
              className="imgWomanSmiling"
              src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/e6659179426b5bca99822220/003.jpg"
              alt="Woman smiling"
            />
            <div className="div1_1_1">
              <p className="pBusiness">
                We have several business <br />
                and industrial parks with <br />
                available space for your <br />
                business
              </p>
              <p className="readMore">READ MORE</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="div2">
          <div className="div2_1">
            <p className="pConstruction">
              Construction
              <br />
              Machinery Co.
            </p>
            <p className="pProud">
              We has a proud tradition of service
              <br />
              as a General Contractor since 1974
            </p>
            <p className="pHeadquartered">
              We headquartered in San Diego, brings over 42 years of local and
              national
              <br />
              construction experience; with a reputation for delivering large
              and unique design-
              <br />
              build projects ahead of schedule and on budget. Our company has
              served clients and
              <br />
              building owners for over four decades.
            </p>
            <p className="readMore">READ MORE</p>
          </div>
          <img
            className="imgCityStreet"
            src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/aca3f71be7485883b4dd29a1/pexelsphoto2884590.jpeg"
            alt="City Street"
          />
        </div>
      </section>
      <section className="section3">
        <div className="div3">
          <p className="pWhat">What we do</p>
          <p className="pCert">Company Certifications</p>
          <p>
            Our company offers a variety of services to meet your project’s
            needs, to take you from <br />
            collaboration meetings all the way to ribbon-cutting and beyond. We
            believe that every <br />
            project is unique, and can customize our approach to fit your
            particular project.
          </p>
          <div className="div3_1">
            <SmallBlock desc1="Healthcare" desc2="Building" />
            <SmallBlock desc1="Education" desc2="Building" />
            <SmallBlock desc1="Government" desc2="Building" />
          </div>

          <div className="div3_1">
            <SmallBlock desc1="Commercial" desc2="Building" />
            <SmallBlock desc1="Residential" desc2="Building" />
            <SmallBlock desc1="Restaurant" desc2="Facilities" />
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="div4">
          <div className="div4_1">
            <SmallBlock desc1="Healthcare" desc2="Building" />
            <p className="pEffective">
              Tiling is an effective way to add elegance & style to any bath or
              kitchen Yellow Hats Remodeling Team specializes in tile
              installation and works directly with each.
            </p>
            <p className="readMore">READ MORE</p>
          </div>

          <img
            class="imgExcavator"
            src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/2dd111d0fa9259e7abf0a248/pexelsphoto259966.jpeg"
            alt="excavator"
          ></img>

          <div className="div4_3">
            <SmallBlock desc1="Education" desc2="Building" />
            <SmallBlock desc1="Government" desc2="Building" />
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="div5">
          <p className="pWhat">Portpholio</p>
          <p className="pCert">Recent Projects</p>
        </div>
      </section>
      <section className="section6">
        <div className="div6">
          <div className="div6_1">
            <img
              src="//images01.nicepage.com/28/9d/289d0988df9ccafe391c5a296f327b0e.png"
              alt="building"
            ></img>
            <img
              src="//images01.nicepage.com/f6/99/f6999cf8d7fee900e76ee65fd1827c4f.png"
              alt="building"
            ></img>
            <img
              src="//images01.nicepage.com/dc/d4/dcd4c46d0ca35931cafdc77fd8bb3568.png"
              alt="building"
            ></img>
            <img
              src="//images01.nicepage.com/a6/ac/a6ac58a6e4e6965bce3fda2c36e43e94.png"
              alt="building"
            ></img>
          </div>
          <div className="div6_1">
            <img
              src="//images01.nicepage.com/60/da/60daec789521593f3dd91cb1bb3d7d60.png"
              alt="building"
            ></img>
            <img
              src="//images01.nicepage.com/dc/a2/dca2e7f841dc5201337d6b80dfffe9f6.png"
              alt="building"
            ></img>
            <img
              src="//images01.nicepage.com/51/6d/516d0cf7e883585853018116d942949c.png"
              alt="building"
            ></img>
            <img
              src="//images01.nicepage.com/24/f2/24f25b480b4e49ccb7c463893d04da4d.png"
              alt="building"
            ></img>
          </div>
        </div>
      </section>
      <section className="section7">
        <div className="div7">
          <img
            className="imgMap"
            src="https://images01.nicepage.com/be/60/be60b4bef50944a54eb655fa128f19f5.png"
            alt="map"
          ></img>
          <div className="div7_2">
            <p className="pWhat">Elvo Construction</p>
            <p className="pCert">The Best World Team</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Maecenas gravida cursus eleifend. Nullam ornare sapien quis{" "}
              <br />
              vulputate cursus. Vivamus vel pellentesque purus, sed dignissim{" "}
              <br />
              elit. Maecenas ac augue metus. Suspendisse in elit nibh. <br />
              Vestibulum in nibh risus. Phasellus ut cursus sem.
            </p>
            <p className="readMore">READ MORE</p>
          </div>
        </div>
      </section>
      <section className="section8">
        <div className="div8">
          <div className="div8_1">
            <p className="pToday">
              Contact us today to plan your boat’s maintenance or <br />
              repair procedure.
            </p>
            <p className="pAddress">
              4262 Richison Drive, <br />
              Missoula, MT 59801
            </p>
          </div>
          <div className="div8_2">
            <p className="pContact">Contact Us</p>
            <div className="div8_2x">
              <div className="div8_2_1">
                <p>Freephone:</p>
                <p>Telephone:</p>
                <p>Fax: </p>
              </div>
              <div className="div8_2_2">
                <p>+1 800 559 6580</p>
                <p>+1 800 603 6035</p>
                <p>+1 800 889 9898</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
