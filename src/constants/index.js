import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    terraform,
    postgres,
    go,
    tailwind,
    aws,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    python,
    meta,
    starbucks,
    tesla,
    shopify,
    aibestgoods,
    capital_one,
    bank_of_america,
    duke_energy,
    ucar,
    gate_gourmet,
    progressive,
    fannie_mae,
    volkswagen,
    lululemon,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Engineer",
      icon: mobile,
    },
    {
      title: "DevOps Engineer",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "GO",
      icon: go,
    },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Terraform",
      icon: terraform,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "Business Intelligence Administration Analyst / Developer",
      company_name: "Gate Gourmet ",
      icon: gate_gourmet,
      iconBg: "#383E56",
      date: "October 2013 - November 2015",
      points: [
        "Automated Backorder notification application utilizing Python and VBA to notify 500+ hubs in North and South America daily shipment status, resulting in a considerable reduction in man-hours",
        "Automated finance department’s manual processes by writing Python scripts to speed processes and maximize accuracy"
      ],
    },
    {
      title: "Web Developer",
      company_name: "Ucar (University Corporation of Atmospheric Research)",
      icon: ucar,
      iconBg: "#E6DEDD",
      date: "December 2015 - November 2016",
      points: [
        "Worked with Grafana for analytics and monitoring of database and website",
        "Worked with RPM Package Manager on a Linux environment to build packages",
        "Worked with NGinx for web servicing",
        "Used Django/Python to build UCAR’s dashboard"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Fannie Mae",
      icon: fannie_mae,
      iconBg: "#383E56",
      date: "November 2016 - January 2018",
      points: [
        "Worked on DevSecOPS Team’s DAST(Dynamic Analysis Security Testing Scan), SAST(Static Application Security Testing) scan, SCA(Software Composition Analysis) scan, OPA(Open Policy Agent Docker Image and Scan Policies), Invicti(Web-Security Scan), Zeronorth, SSL scan, Eligible Scan, API Scan, SDElements scan, Compliance Scan, and Container Scan.",
        "Worked with AWS (Lambda, Fargate, CloudWatch, S3 Buckets, API Gateway, etc..)",
        "Wrote REST end-points and schemas to perform query scans for various scans",
        "Used CFT(Cloudformation) to add AWS resources and deploy such as lambda, api gateway, etc..",
        "Deployed applications to AWS environment with Jenkins and UCD"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Capital One",
      icon: capital_one,
      iconBg: "#E6DEDD",
      date: "January 2018 - January 2020",
      points: [
        "Responsible for converting 1.2 million Capital One Investing customers’ sensitive information to E*TRADE.",
        "Developed validation scripts with Python and Pandas for millions of rows of Capital One’s data",
        "Developed a time-saving method utilizing Pandas data frame with Python to find discrepancies in data migration during ETL jobs from the Sybase database.",
        "Developed SQL queries to extract data from existing sources and transferred the accounts and related data to E*TRADE.",
        "Imported information from different sources such as AWS S3, and EC2 and converted them into Spark RDD for analyzing data.",
        "Developed spark scripts via pyspark by adhering to the client’s requirements for ensuring the effective operation"
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Volkswagen of America",
      icon: volkswagen,
      iconBg: "#E6DEDD",
      date: "Feburary 2020 - July 2020",
      points: [
        "Developed web app solutions using a variety of languages, frameworks, and platforms such as NODE JS, SQL, GraphQL, and HTML.",
        "Created a product report in CSV and sent it to Datalake in sftp format with NODE JS.",
        "Data Extracting, Validation, and Correction with Python - Pandas",
        "Worked on the CI/CD pipeline to deploy to AWS EC2 instances",
        "Worked with RESTful application on AWS Lambda with Python",
        "Worked with AWS (Lambda, Fargate, CloudWatch, S3 Buckets, API Gateway, etc..)"
      ],
    },
    {
      title: "Data Engineer",
      company_name: "Progressive",
      icon: progressive,
      iconBg: "#E6DEDD",
      date: "July 2020 - March 2021",
      points: [
        "Fetched all the snowflake-config- repos in GitHub into a base repo with gitmodules and Automate the CICD pipeline with Jenkins API, Git, and Python",
        "Worked with Snowflake to clear old entitlements from snowflake via python and pandas",
        "Worked in AWS environment (S3 / EC2 / ECS / Lambda / RDS)",
        "Used PySpark to process batch data pipelines",
        "Wrote unittest and integration test with pytest and moto"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Lululemon",
      icon: lululemon,
      iconBg: "#E6DEDD",
      date: "March 2021 - January 2023",
      points: [
        "Proficient with container systems like Docker and container orchestration with Kubernetes and worked with Terraform.",
        "Managed Docker orchestration and Docker containerization with Kubernetes",
        "Designed architectural frameworks solutions for SaaS that best suits client web application hosting demands in AWS cloud platform, leveraging AWS services such as S3, Lambda, API Gateway, SQS, SNS",
        "Used AWS Glue to define ETL jobs(converted data into a standardized schema, filter out irrelevant data, join data from different sources and performed, other data manipulations)",
        "Used AWS Glue to load data into Amazon Redshift and datalake after is transformed.",
        "Used AWS Glue to run periodically to keep the data warehouse and datalake up-to-date with new data coming into the sources."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Duke Energy",
      icon: duke_energy,
      iconBg: "#E6DEDD",
      date: "January 2023 - April 2023",
      points: [
        "Created Kafka Sink and Source connectors for PostgreSQL",
        "Used splunk to check application logs",
        "Wrote unittest and integration test with pytest and moto",
        "Designed architectural frameworks solutions for SaaS that best suits client web application hosting demands in AWS cloud platform, leveraging AWS services such as S3, Lambda, API Gateway, SQS, SNS",
        "Develop key application components using Python (Flask) and RESTful architecture.",
        "Worked with AWS environment ( Lambda / RDS / DynamoDB)"
      ],
    },
    {
      title: "DevOps Engineer",
      company_name: "Bank of America",
      icon: bank_of_america,
      iconBg: "#E6DEDD",
      date: "April 2023 - August 2023",
      points: [
        "Performed Rehydration for EC2 and ASG",
        "Helped to solve tickets opened by users (Segment Leads) (Production Support)",
        "Made necessary changes on CFT and Jenkins files",
        "Wrote python script to find differences in each table between two different databases",
        "Wrote python script to update database table from another database table"
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "AI-BESTGOODS",
      description:
        "Web application that recommends users to best products in each category with AI. Compare products and let users ask AI's advice",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "streamlit",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: aibestgoods,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };
