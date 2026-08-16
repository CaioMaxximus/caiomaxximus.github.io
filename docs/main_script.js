function Project(title, description, image, link,tags = []) {
    this.title = title
    this.description = description
    this.image = image
    this.link = link
    this.tags = tags
}

function Certification(title, image, link){
    this.title = title
    this.image = image
    this.link = link
}


const software_projects = [
    new Project("Onion PY - An anonymus tor P2P message  service build with python",
        `
            Writing a anonymus message chat to host and connect over the Tor network in python using a graphic static library as interface

                - Use threads to separate events loops from UI interface to application domain
                - Use asynchronus techiniques to isolate responsabilities from each application layer
                - Asynchonus queues and event bus allow a fluid operation and strong arquitetural componetization 
        `,
        "assets/software_projects/logo_onio_py.png", "https://github.com/CaioMaxximus/onionpy-visual-chat" ,["Python" ,"Tor" , "TCP/Server" ,"P2P"]
    ),
    new Project("Quote Frame ",
        `
            A web application that combines FastAPI with NLP to return a random quote
             and a thematically associated photograph with each iteration.
        ` ,  "assets/software_projects/quote_frame_img.png" ,"https://github.com/CaioMaxximus/Quote_Frame" , ["Python" , "JavaScript" , "FastAPI" , "React"]
    )
    

];

const data_science_projects = [
    new Project("Exploring different in Linear Regression with input transformation",
        "This is a practical study on how Linear Regression can be used to approximate different types of curves through input transformation, allowing for a simple and quick solution that can be used to model different types of more complex curves.",
        "assets/software_projects/linear_regression.jpeg","https://github.com/CaioMaxximus/Exploring-Different-Curves-with-Linear-Regression"
    ),
    new Project("Coffee Shop - Sales analysis", 
        "This new Project analyzes sales data from a coffee shop located in Vinnytsia, Ukraine, with the goal of understanding demand patterns and identifying key drivers of sales variability over time",
    "assets/data_science_imgs/coffe_sales_proj.png", "https://github.com/CaioMaxximus/CoffeeShop_Analysis"),
    new Project("Time Series Decomposition", 
        "This notebook explore classic time series decomposition techiniques to understand sales patterns in a bike store.",
    "assets/data_science_imgs/bike_sales_proj.png", "https://github.com/CaioMaxximus/Time_Series_Decomposition-bike_sales_america")
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
                <div class="proj-tags">
            ${p.tags.map(e => `<span>${e}</span>`).join('')}
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