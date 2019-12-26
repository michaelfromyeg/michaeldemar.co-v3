var rawinfo = {
    bio: "Hi there! My name is Michael DeMarco and I’m a first-year student at UBC." +
     " Next year, I’m planning on majoring in the combined Computer Science and Mathematics program." +
     " I’m passionate about developing products and solutions that people get excited about. My experience" +
     " is primarily in web development, with a focus on the backend. I’m originally from Edmonton, AB, and in" +
     " my spare time (which there’s not much of) I like to read, make music, and play soccer. Feel free to download my" +
     " resume or follow any of the social links to learn more about me.",
    experience: {
        list: [
            {
                title: "Backend Developer",
                company: "Code The Change Foundation",
                company_url: "http://codethechange.ca/",
                location: "Vancouver, BC",
                start_date: "Aug 2019",
                end_date: "Present",
                description: ["With team of six, building web-application to allow local not-for-profit to track and coordinate volunteers."],
                technologies: ["Node.js","React.js"]
            },
            {
                title: "Registrar",
                company: "The Seminar on United Nations and International Affairs (SUNIA)",
                company_url: "https://www.sunia.ca/",
                location: "Edmonton, AB",
                start_date: "Jan 2017",
                end_date: "Present",
                description: ["Utilized Google Apps Script to create system for managing 150+ registrants.",
                              "Worked with Slack API and Google Apps Script API to automate registrant contact process."],
                technologies: ["Google Apps Script","Python"]
            },
            {
                title: "Program Coordinator",
                company: "Metro Continuing Education",
                company_url: "https://www.metrocontinuingeducation.ca/",
                location: "Edmonton, AB",
                start_date: "July 2017",
                end_date: "July 2019",
                description: ["Ran week-long camps teaching children aged 8 to 11 programming basics in Unity."],
                technologies: ["Unity"]
            }
        ],
    },
    projects: {
        list: [
            {
                name: "Massive Volunteering Site",
                title: "Full Stack Web Developer",
                github_url: "",
                location: "Edmonton, AB",
                start_date: "Jan 2018",
                end_date: "Aug 2019",
                description: ["Project built for a high-school club, Massive Volunteering, which showcases volunteer experiences.",
                              "Created front-end and back-end for website which allows students and organisations to access and post, respectively, volunteer experiences."],
                technologies: ["Python", "Flask", "mySQL"],
            },
            {
                name: "Student Gradebook (HackED 2019)",
                title: "Backend Developer",
                github_url: "",
                location: "Edmonton, AB",
                start_date: "Jan 2018",
                end_date: "",
                description: ["As a part of a team of three, built the back-end of CRUD-capable spreadsheet-style app to allow students to track grades."],
                technologies: ["Java", "Swing", "JDBC"],
            }
        ]
    },
    activities: {
        list: [
            {
                title: "Student Programming Coordinator",
                organization: "The Canadian Student Leadership Conference (CSLC) 2018",
                location: "Edmonton, AB",
                start_date: "Dec 2016",
                end_date: "Oct 2018",
                description: ["For week-long conference of 1000 student-leaders across Canada, managed horizontal communication across five high schools and booked workshops, keynotes, and activities."],
            }
        ]
    },
    education: {
        list: [
            {
                institution: "The University of British Colubmia (UBC)",
                location: "Vancouver, BC",
                degree: "B.Sc. Candidate for Computer Science and Mathematics",
                grade: "",
                start_date: "Sep 2019",
                end_date: "May 2023 (anticipated)",
                courses: ["CPSC 110 (Introduction to Programming)"]
            },
            {
                institution: "McNally Composite High School",
                location: "Edmonton, AB",
                degree: "IB Diploma and Alberta Education Diploma",
                grade: "41/45 (IB), 98.3% (Ab. Ed.)",
                start_date: "Sep 2016",
                end_date: "June 2019",
                courses: ["Chemistry HL, English HL, History HL, Mathematics SL, French B SL, Physics SL, Computer Science SL"]
            }
        ]
    },
    skills: {
        languages: ["Java", "Python", "Javascript"],
        frameworks: ["Flask", "React.js", "Node.js", "Swing"],
        tools: ["Git", "Agile", "Adobe Creative Cloud"],
    },
    awards: {
        list: [
            {
                name: "Michael A. Strembitsky Gold Medallist",
                organization: "Edmonton Public Schools",
                url: "",
                date: "Jun 2019",
                details: "I was nominated by McNally High School for Michael A. Strembitsky award, which recognises accomplishments in academics and leadership, on behalf of McNally. All Edmonton high schools choose one nominee. Out of the the 19 nominees, I was awarded the gold medallion ($2,000).",
            },
            {
                name: "Djavad Mowafaghian Presidential Scholar Award",
                organization: "The University of British Columbia",
                url: "",
                date: "Apr 2019",
                details: "In recognition for achievements both inside and outside of the classroom, I was awarded the Djavad Mowafaghian Presidential Scholar Award from UBC. The award is worth $80,000 and is tenable at the university over the course of my four years of undergraduate studies.",
            },
            {
                name: "Class Valedictorian",
                organization: "McNally Composite High School",
                url: "",
                date: "May 2019",
                details: "Chosen as Valedictorian for the graduating class of 2019.",
            },
            {
                name: "TD Award of Merit",
                organization: "TD Community Leadership Scholarships",
                url: "",
                date: "Mar 2019",
                details: "From a field of 2700 applicants, I was selected as one of 59 finalists to be interviewed for the TD Community Leadership Scholarship, which recognises significant contributions to one's community.",
            },
            {
                name: "ATB Loran Finalist",
                organization: "Loran Foundation",
                url: "",
                date: "Jan 2019",
                details: "The Loran received 5,089 applications for the Loran Award. Their volunteers assessed and interviewed 518 students across the country in order to identify 88 graduating high school and Cegep students. I was thankfully selected as one of the finalists and had the opportunity to attend the National Selections in Toronto. The distinction included $5,000 to recognize my efforts in leadership.",
            }
        ]
    },
    contact: { // todo: fill-in contact information
        github_url: "https://github.com/michaelfromyeg",
        linkedin_url: "https://www.linkedin.com/in/michaelfromyeg/",
        instagram_url: "https://www.instagram.com/michaelfromyeg/",
        facebook_url: "https://www.facebook.com/michaelfromyeg",
        youtube_urll: "https://www.youtube.com/channel/UCohoNm6NqDAetXX6MiaV_RQ?view_as=subscriber",
        mail_url: "mailto:michaelfromyeg@gmail.com",
        phone: "(780) 680-9634",
    },
    address: {
        line1: "6363 Agronomy Road",
        line2: "Vancouver, BC  V6T 1Z4"
    }
}

export default rawinfo