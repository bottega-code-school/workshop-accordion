import * as React from "react";
import Layout from "./Layout";
import Accordion from "./Accordion";

const azCities: { id: string; name: string; description: string }[] = [
  {
    id: "1",
    name: "Phoenix",
    description:
      "Phoenix is the anchor of the Phoenix metropolitan area, also known as the Valley of the Sun, which in turn is part of the Salt River Valley. The metropolitan area is the 10th-largest by population in the United States, with approximately 4.85 million people as of 2020, making it the largest in the Southwestern United States.[10][11] Phoenix, the seat of Maricopa County, has the largest area of all cities in Arizona, with an area of 517.9 square miles (1,341 km2), and is also the 11th largest city by area in the United States.[12] It is the largest metropolitan area, both by population and size, of the Arizona Sun Corridor megaregion.",
  },
  {
    id: "2",
    name: "Scottsdale",
    description:
      "Scottsdale is a city in the eastern part of Maricopa County, Arizona, United States, and is part of the Phoenix metropolitan area. Named Scottsdale in 1894 after its founder Winfield Scott, a retired U.S. Army chaplain, the city was incorporated in 1951 with a population of 2,000. At the 2020 census, the population was 241,361,[4] which had grown from 217,385 in 2010.[5] Its slogan is 'The West's Most Western Town'.[6] Over the past two decades, it has been one of the fastest growing cities in the United States.",
  },
  {
    id: "3",
    name: "Tempe",
    description:
      "Tempe is an inner suburb, located between the core city of Phoenix and the rest of the East Valley. Due to this as well as being the home of the main campus of Arizona State University, Tempe has a fairly dense, urbanized development pattern in the northern part of the city especially in relation to the Valley Metro Line . Going south, development becomes less dense, consisting of single-family homes, strip malls and lower-density office parks.",
  },
];

const utahCities: { id: string; name: string; description: string }[] = [
  {
    id: "1",
    name: "Salt Lake City",
    description:
      "Salt Lake City, often shortened to Salt Lake, and colloquially called SLC, is the capital and most populous city of Utah, United States. It is the seat of Salt Lake County, the most populous county in Utah. With a population of 200,133 in 2020,[10] the city is the core of the Salt Lake City metropolitan area, which had a population of 1,257,936 at the 2020 census. Salt Lake City is further situated within a larger metropolis known as the Salt Lake City–Ogden–Provo Combined Statistical Area, a corridor of contiguous urban and suburban development stretched along a 120-mile (190 km) segment of the Wasatch Front, comprising a population of 2,746,164 (as of 2021 estimates),[11] making it the 22nd largest in the nation. It is also the central core of the larger of only two major urban areas located within the Great Basin (the other being Reno, Nevada).",
  },
  {
    id: "2",
    name: "Lehi",
    description:
      "Lehi (/ˈliːhaɪ/ LEE-hy) is a city in Utah County, Utah, United States. It is named after Lehi, a prophet in the Book of Mormon. The population was 75,907 at the 2020 census,[4] up from 47,407 in 2010. The rapid growth in Lehi is due, in part, to the rapid development of the tech industry region known as Silicon Slopes. The center of population of Utah is located in Lehi.",
  },
  {
    id: "3",
    name: "Provo",
    description:
      "Provo is the home to Brigham Young University,[8] a private higher education institution operated by the Church of Jesus Christ of Latter-day Saints (LDS Church). Provo also has the LDS Church's largest Missionary Training Center (MTC). The city is a focus area for technology development in Utah, with several billion-dollar startups.[9] The city's Peaks Ice Arena was a venue for the Salt Lake City Winter Olympics in 2002. Sundance Resort is 13 miles (21 km) northeast, up Provo Canyon.",
  },
];

export default function Home() {
  return (
    <Layout>
      <h2>Arizona</h2>
      <Accordion data={azCities} variant="multiple" />
      <h2>Utah</h2>
      <Accordion data={utahCities} variant="multiple" />
    </Layout>
  );
}
