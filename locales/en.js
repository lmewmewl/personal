const messagesEn = {
    // main
    message: {
        helloMyName: 'Hello! My name is ',
        myName: 'Constantine',
        myProfession: 'I\'m frontend developer',
        letsStart: 'Let\'s get acquainted',
    
        // header
        linkAbout: 'about',
        linkResume: 'resume',
        linkContacts: 'contacts',
    
        // about
        someAboutMe: 'A little about me',
        aboutText1: 'My name is Constantine, i\'m ',
        aboutText2: 'frontend developer and project manager.',
        aboutText3: 'Currently I live in',
        aboutText4: 'Saint-Petersburg',
        aboutText5: ' (ready to move abroad).',
        aboutText6: 'I like working with everything that is visual and has a code, so I decided to go to',
        aboutText7: 'frontend development',
        aboutText8: 'also uses various web designer tools. I do not stop at this and try something new.',
        aboutText9: 'In my free time I get carried away',
        aboutText10: 'photography and video filming',
        aboutText11: 'mostly air, I also like to solder various things, there are several ready-made projects ',
        aboutText12: 'mechanical keyboards',
        aboutText13: 'I also actively follow computer hardware and the gaming industry.',
    
    
        // footer
        footerCCCopy: 'opy if you like it',

        
        // porfolio
        titleResume: 'Resume',
        titleExp: 'Experience',
        titleSkilzzz: 'Skills',
        titleCourses: 'Education and courses',

        titleFreelance: 'Freelance',
        titleCompanie1: 'MCArt',
        titleCompanie2: 'Digimatix',
        titleCompanie3: 'MK - Media',
        titleCompanie4: 'Computer systems and service',
        titleCompanie5: 'Sberbank',


        titleSkill1: 'Development',
        titleSkill2: 'UI / UX, image editing',
        titleSkill3: 'Management',
        titleSkill4: 'Other',


        courseTitle1: 'Stratoplan',
        courseTitle2: '1C-Bitrix',
        courseTitle3: 'Southern Federal University',

        currentTimeTitle: 'Current time',

        educationInfo1: 'Project Manager Certificate',
        educationInfo2: 'Certificate Content Manager, 1C-Bitrix',
        educationInfo3: 'Certificate Installation and configuration, 1C-Bitrix',
        educationInfo4: 'Certificate Administrator, Basic, 1C-Bitrix',
        educationInfo5: 'Master\'s Degree, Production Management',
        educationInfo6: 'Bachelor\'s Degree, Management',



        myPosition1: 'Frontend developer, project manager',
        myPosition2: 'Frontend developer',
        myPosition3: 'Frontend developer, content manager',
        myPosition4: 'Service Engineer',
        myPosition5: 'Promoter Consultant',


        skillsDev: [
            {skill: 'HTML5'},
            {skill: 'CSS (Vanila CSS, LESS, SCSS, Bootstrap)'},
            {skill: 'Javascript (jQuery, Vue JS, Nuxt JS)'},
            {skill: 'Dart (Flutter)'},
            {skill: 'SVG'},
            {skill: 'Git'},
        ],

        uxui: [
            {skill: 'Figma'},
            {skill: 'Photoshop'},
            {skill: 'Lightroom'},
            {skill: 'CorelDRAW'},
        ],

        management: [
            {skill: 'Communication with enterprise customers'},
            {skill: 'Logging of meetings'},
            {skill: 'Collection and formalization of requirements'},
            {skill: 'Timing evaluation'},
            {skill: 'Quality control of tasks'},
            {skill: 'Working with accounts'},
            {skill: 'Development team management'},
            {skill: 'Internal product management'},
            {skill: 'Planning'},
            {skill: 'Prototyping'},
        ],

        otherSkillz: [
            {skill: 'UAV control (FPV, DJI)'},
            {skill: 'Photography on semi-professional SLR cameras'},
            {skill: 'Soldering'},
            {skill: 'Excellent knowledge of PC and office equipment'},
            {skill: 'Organization of an ergonomic workspace'},
            {skill: 'Basic concepts of blockchain systems'},
            {skill: 'DeFi user'},
            {skill: 'English B1 (need more practice in communication)'},
        ],


        managmentExp: [
            {skill: 'Cross-functional team management.'},
            {skill: 'Stakeholders management: feedback collection, backlog grooming.'},
            {skill: 'Progress tracking and reporting.'},
            {skill: 'Project documentation development (project knowledge base).'},
            {skill: 'Stakeholders management.'},
            {skill: 'Creating design prototypes.'},
            {skill: 'Clarifying the requirements, interfaces, and architecture.'},
            {skill: 'Delivered on time and on budget.'},
            {skill: 'Analyzing risks, mitigated issues and reported.'},
            {skill: 'Communication and management foreign clients (Germany).'},
        ],

        subHeadingsExp: [
            {heading: 'Management'},
            {heading: 'Development'},
        ],

        expDevMCArt: [
            {skill: 'Developing enterprise portals for intranet / extranet clients (B2B, B2C), with IE10 support.'},
            {skill: 'Developing internal modules and apps for marketplace.'},
            {skill: 'Developing apps using Bitrix REST API.'},
            {skill: 'Developing apps and services using Vue JS (v2).'},
            {skill: 'Developing internal mobile product using Flutter framework.'},
            {skill: 'Developing and maintaining a knowledge base'},
            {skill: 'Communicating with back-end developers for any front-end problematic issues.'},
            {skill: 'UX/UI consult.'},
            {skill: 'Design editing and creaction (Adobe PS, Figma).'}
        ],

        expDevDigimatix: [
            {skill: 'Creating modular, responsive templates using modern CSS techniques (include Bootstrap) and JavaScript libraries (GULP).'},
            {skill: 'Creating templates for highload B2C marketplaces.'},
            {skill: 'Landing page development.'},
            {skill: 'Implementing PixelPerfect layouts to existing websites.'},
            {skill: 'Communication and tech support for clients.'},
            {skill: 'UX/UI consulting.'},
            {skill: 'Editing graphics for web development (Adobe PS).'},
        ],

        expDevMKMedia: [
            {skill: 'Developing cross-browser/platform HTML5, CSS and JavaScript to match design specs for complex page layouts while adhering to code standards.'},
            {skill: 'Using best practices in HTML and CSS to develop a static site based from a static image of a website design'},
            {skill: 'Implementing a mobile-first approach to existing websites.'},
            {skill: 'Close collaborating with designers and back-end dev team.'},
            {skill: 'Working directly with client stakeholders to develop technical solutions for business cases.'},
            {skill: 'Landing page development'},
            {skill: 'Editing graphics for web development (Adobe PS)'},
        ],

        expEngCSaS: [
            {skill: 'Repair of office equipment'},
            {skill: 'Repair of PC, laptops'},
            {skill: 'Repair of phones, smartphones'},
            {skill: 'Repair of components (motherboards, video adapters)'},
            {skill: 'Diagnostics of computers and office equipment.'},
            {skill: 'Installation of networks, setting up routers and modems.'},
            {skill: 'Refilling cartridges.'},
        ],

        expPromSber: [
            {skill: 'Assisting customers with self-service devices and ATMs'},
            {skill: 'Services consulting'},
        ],
        
        expFreelance: [
            {skill: 'Verbal and written communications between companies and clients.'},
            {skill: ' Meeting with clients to review website, gathering the client requests specifications for new or existing websites.'},
            {skill: 'Developing cross-browser websites (shops, education sites, landing pages, marketing pages)'},
            {skill: 'UX/UI consulting.'},
            {skill: 'Developed and edited 100+ responsive websites for clients in a variety of industries.'},
        ],


        // header

        indexTitle: 'Frontend developer • Constatine Fateev',
        aboutTitle: 'About me',
        resumeTitle: 'Resume',
        contactsTitle: 'My contacts',

        indexDescription: 'Main page, frontend developer',
        aboutDescription: 'About me, frontend developer',
        resumeDescription: 'Resume, frontend developer',
        contactsDescription: 'Contats, frontend developer',

        
        indexContent: 'Site of frontend developer',
        aboutContent: 'About me, frontend developer',
        resumeContent: 'Resume of frontend developer',
        contactsContent: 'Contacts of frontend developer',

    }

}

export default messagesEn