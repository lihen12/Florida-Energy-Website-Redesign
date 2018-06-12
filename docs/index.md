# Flordia Energy Website Redesign Proposal

## Objectives/Purpose of the Redesign

- Build responsive, modern redesign of Flordia Energy website
- Add interactivity with Javascript Libraries
- Learn how to use API's and implement them into the website using public data
- Learn how to strategize project management throughout the course

## State of the Current Site

### Accessibility Audit

- Used WAVE (Web Accessibility Evaulation Tool) as a General measure of accessibility
  - Found multiple errors, alerts, features, structural elements, etc. to understand the functionality and structural purpose of the website syntax. 
    - This is across all links in the website. 
    
- Used ColorOracle to test color accessiblity of website
  - Nothing too out of the ordinary for colorblind people that makes the website hard to use.

- Used Hemingway Editor to examine large texts
  - The editor determined that the large paragraphs were too hard for users to read unless they were affiliated in the industry and field. 


### Mobile Friendliness

- Using Google's Mobile-Friendly Test, I have determined that the current FESC website is not mobile friendly
  - Issues:
    - Viewport not set
    - Clickable elements too close together
    - Text too small to read
    - Content wider than screen

### Performance (How quickly does it load?)

- I used webpagetext.org to run a performance test on the FESC website
  - Dulles, VA - Chrome
    - Summary Grades: 
      - First Byte Time: F
      - Keep-Alive Enabled: A
      - Compress Transfer: A
      - Compress Images: C
      - Cache Static Content: F
      - Effective use of CDN: N/A
    - Performance Results:
      - Took ~4.5 seconds to load the website the first time
  - Orlando, FL - Chrome
    - Summary Grades: 
      - First Byte Time: F
      - Keep-Alive Enabled: A
      - Compress Transfer: A
      - Compress Images: C
      - Cache Static Content: F
      - Effective use of CDN: N/A
    - Performance Results: 
      - Took ~4.1 seconds to load the website the first time
  - Los Angeles, CA - Chrome
    - Summary Grades: 
      - First Byte Time: F
      - Keep-Alive Enabled: A
      - Compress Transfer: A
      - Compress Images: C
      - Cache Static Content: F
      - Effective use of CDN: N/A
    - Performance Results: 
      - Took ~4.1 seconds to load the website the first time

### Functionality (Does it work?)
- LinkedIn Image Link on Home page doesn't work
- Sitemap is empty
- Parking from http://parking.ufl.edu/RUgarage/RUhome.htm of Visit Us has been moved
- Most major navigation links have full functionality

### Ease of use (Is it pleasant to use?)
- It is very tedious to navigate through the site. 
- Some content should be separated into a different tab. 
- Some navigation titles could be better worded to encompass the content.
- A lot of lists of links. 

## User Research (Who are expected users? What do they want to accomplish?)
- People associated with the FESC (work directly)
- Aspring students in the Energy field across the 12 represented universities
- People in the science community (media, business, governments, industry) 

## Device Support Necessary
- Mobile devices (medium priority)
- Tablets (medium-high priority)
- Desktop (high priority)

## Recommendations
- Ensure responsiveness with all aspects of site
- Media queries are used properly based on researched device properties
- Ensure Google Charts is responsive


### Deliverables - Each with description and acceptance terms
- Good results for Google Mobile Friendliness Tests
- No Validation errors
- No broken links