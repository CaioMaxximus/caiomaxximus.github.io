function Project(title, description, image, link) {
    this.title = title
    this.description = description
    this.image = image
    this.link = link
}

function Certification(title, image, link){
    this.title = title
    this.image = image
    this.link = link
}


const software_projects = [
    new Project("Onion PY",
        "A anonymus chat over the tor network buiil completely in python",
        "assets/software_projects/logo_onio_py.png", ""
    ),
    new Project("todo_list_python",
        "A fluid task manager buid in Pyhton using tikinter library, using asynchounus techiniques",
        "", ""
    ),
    new Project("Snake Game - Vanilla JS",
        "Using vanilla js to experiment Doom and timed events",
        "", ""
    )

];

const data_science_projects = [
    new Project("Exploring different in Linear Regression with input transformation",
        "This is a practical study on how Linear Regression can be used to approximate different types of curves through input transformation, allowing for a simple and quick solution that can be used to model different types of more complex curves.",
        "assets/software_projects/linear_regression.jpeg",""
    ),
    new Project("Coffee Shop - Sales analysis", 
        "This new Project analyzes sales data from a coffee shop located in Vinnytsia, Ukraine, with the goal of understanding demand patterns and identifying key drivers of sales variability over time",
    "assets/data_science_imgs/coffe_sales_proj.png", ""),
    new Project("Time Series Decomposition", 
        "This notebook explore classic time series decomposition techiniques to understand sales patterns in a bike store.",
    "assets/data_science_imgs/bike_sales_proj.png", "")
];

const certifications = [
    new Certification("Advanced SQL" , "assets/certifications/certificacao_hackerhank.png"),
    new Certification("Software Engineer", "assets/certifications/interne_software_engineer.png")
];

const articles = [
    new Project("Verification of authorship in text messages using graphs and machine learning",
            "This article uses data from Discord server chat messages with the purpose of automatically verifying the authorship of messages through supervised training",
    "", "")
];


function build_soft_projects(){
    const container = document.querySelector("#software-container .projects_content .projects_list");
    software_projects.forEach(p=>{
        container.innerHTML += `
             <div class="project-banner">
                            <div class="img-container">
                                <img src="${p.image}" alt="">
                            </div>
                            <a href="${p.link}">                  
                            <div class="content-description">
                                <h2>${p.title} </h2>
                                <p>${p.description}</p>
                            </div></a>
                    </div>
        `

    });
}


function build_data_projects(){
    
    const container = document.querySelector("#data-science-container .projects_content .projects_list");
    data_science_projects.forEach(p=>{
        container.innerHTML += `
             <div class="project-banner">
                        <div class="img-container">
                            <img src="${p.image}" alt="">
                        </div>
                        <a href="${p.link}">
                            <div class="content-description">
                                <h2>${p.title} </h2>
                                <p>${p.description}</p>
                            </div>
                        </a>
                    
                    </div>
        `

    });
}


function build_certifications(){
    
    const container = document.querySelector("#centification-container .documents_content .grid_list");
    certifications.forEach(p=>{
        container.innerHTML += `
             <div class=documents-banner>
                        <div class="img-container">
                            <img src="${p.image}" >
                        </div>
                        <div>
                            <h2> ${p.title}</h2>
                        </div>
                    </div>
        `

    });
}
// console.log(software_projects)

build_soft_projects()
build_data_projects()
build_certifications()