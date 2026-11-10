export const profile = {
  name: "Mehdi Jouhari",
  title: "DevOps & Cloud Engineer",
  location: "France",
  introduction: "I work across cloud infrastructure, Kubernetes, and platform engineering, with a focus on making complex systems easier to deploy, operate, and trust.",
  focus: ["Kubernetes", "GitOps", "Terraform", "AWS · Azure", "Observability"],
  aboutLead: "I’m Mehdi, a DevOps & Cloud Engineer interested in the systems that help teams build and operate software with confidence.",
  aboutParagraphs: [
    "My project work spans cloud-native infrastructure, Kubernetes platforms, GitOps, automation, security controls, observability, and the operational foundations of AI and data systems.",
    "I value infrastructure that can be understood as well as deployed: explicit configuration, repeatable changes, useful feedback, and sensible boundaries between teams and services.",
  ],
  backgroundPlaceholder: "Professional background and employment history: details to be added.",
  emailLabel: "Address to be added",
  emailHref: "mailto:EMAIL-TO-BE-ADDED",
  github: "https://github.com/MehdiJ0uh4ri",
  linkedin: "https://www.linkedin.com/in/mehdi-jouhari-60b037293/",
  cvPath: "/assets/Mehdi-Jouhari-CV-REPLACE.pdf",
};

export const projects = [
  {
    id: "bedrock-rag-api", category: "CLOUD / AI ENGINEERING / SERVERLESS",
    title: "Bedrock RAG API", description: "A production-ready RAG API on AWS Bedrock, built with Terraform. Hybrid retrieval, signed API access, guardrails, and evaluation tests.",
    overview: "A cloud-native retrieval-augmented generation API, with its infrastructure defined and deployed through Terraform.",
    objectives: ["Expose a retrieval-augmented generation workflow through a signed API.", "Combine hybrid retrieval with guardrails and evaluation tests.", "Keep cloud infrastructure reproducible with Terraform."],
    architecture: "API Gateway provides the request boundary; Lambda runs the Python API; AWS Bedrock supplies model capabilities, with OpenSearch supporting retrieval. Terraform defines the infrastructure.",
    features: ["Hybrid retrieval", "Signed API access", "Guardrails", "Evaluation tests", "Infrastructure as code"],
    technologies: ["Python", "AWS Bedrock", "Lambda", "API Gateway", "Terraform", "OpenSearch"],
    diagram: ["API Gateway", "Lambda", "Bedrock", "OpenSearch"], accent: "red", repo: "bedrock-rag-api",
  },
  {
    id: "internal-developer-platform", category: "PLATFORM ENGINEERING / KUBERNETES / GITOPS",
    title: "Internal Developer Platform", description: "A developer platform combining Backstage, Crossplane, ArgoCD, vCluster tenancy, policy enforcement, and cost visibility.",
    overview: "A Kubernetes-based internal developer platform that brings service discovery, infrastructure provisioning, GitOps, tenant isolation, policy, and cost views together.",
    objectives: ["Provide a Backstage developer portal.", "Represent infrastructure as Crossplane-managed Kubernetes resources.", "Support multi-tenancy, policy enforcement, and chargeback."],
    architecture: "Backstage fronts the developer experience; Crossplane models infrastructure as CRDs; ArgoCD reconciles Git-managed changes with sync waves. vCluster provides tenant boundaries, Gatekeeper enforces OPA policies, and OpenCost supports chargeback.",
    features: ["Backstage portal", "Crossplane infrastructure CRDs", "ArgoCD sync waves", "vCluster multi-tenancy", "OPA Gatekeeper policies", "OpenCost chargeback"],
    technologies: ["Kubernetes", "Backstage", "Crossplane", "ArgoCD", "vCluster", "OPA Gatekeeper", "OpenCost"],
    diagram: ["Backstage", "Crossplane", "ArgoCD", "Kubernetes"], accent: "blue", repo: "internal-developer-platform",
  },
  {
    id: "mlops-eks-platform", category: "MLOPS / CLOUD / KUBERNETES",
    title: "MLOps on EKS", description: "An AWS EKS MLOps platform connecting event ingestion, feature management, model tracking, canary delivery, drift detection, and retraining.",
    overview: "A Kubernetes-hosted ML platform that addresses the infrastructure and operations around model delivery and lifecycle.",
    objectives: ["Connect streaming data to model features.", "Track and serve models with controlled rollout.", "Detect drift and support automated retraining."],
    architecture: "Kafka feeds data into Feast; MLflow manages the registry. Istio and Seldon handle canary delivery; Evidently detects drift and participates in the retraining workflow on AWS EKS.",
    features: ["Kafka ingestion", "Feast feature store", "MLflow model registry", "Istio and Seldon canary rollouts", "Evidently drift detection", "Automated retraining", "SLO-related capabilities"],
    technologies: ["AWS EKS", "Kubernetes", "Kafka", "Feast", "MLflow", "Istio", "Seldon", "Evidently"],
    diagram: ["Kafka", "Feast", "MLflow", "EKS"], accent: "red", repo: "mlops-eks-platform",
  },
  {
    id: "devsecops-compliance-system", category: "DEVSECOPS / SECURITY / COMPLIANCE",
    title: "DevSecOps Compliance System", description: "A shift-left security pipeline for code, dependencies, containers, IAM, and network policy, with noise-reduced CVE triage.",
    overview: "A security and compliance system that brings automated checks and policy-as-code into software delivery and cloud configuration.",
    objectives: ["Integrate security analysis into delivery pipelines.", "Reduce noise in vulnerability triage.", "Apply reusable policy controls across containers, IAM, and networking."],
    architecture: "Pipeline checks cover SAST, DAST, SCA, and SBOM scanning. OPA expresses policies for containers, IAM, and networking; automation supports least-privilege IAM generation.",
    features: ["SAST, DAST, and SCA", "SBOM scanning", "Noise-reduced CVE triage", "OPA policy as code", "Least-privilege IAM generation"],
    technologies: ["Python", "OPA", "SAST", "DAST", "SCA", "SBOM", "IAM"],
    diagram: ["Source", "Scan", "OPA policy", "Deploy"], accent: "blue", repo: "devsecops-compliance-system",
  },
  {
    id: "multi-dc-ecommerce-platform", category: "DISTRIBUTED SYSTEMS / KUBERNETES / INFRASTRUCTURE",
    title: "Multi-DC E-commerce", description: "A local multi-data-center Kubernetes platform modelling e-commerce workloads, failover, distributed data, and observability.",
    overview: "A locally modelled distributed platform for exploring multi-DC infrastructure patterns and operational behavior.",
    objectives: ["Model distributed e-commerce services across data centers.", "Explore failover and resilience concepts.", "Bring infrastructure, data, and monitoring components into one environment."],
    architecture: "Terraform and Helm define the environment; Kubernetes hosts workloads; Kafka supports messaging; PostgreSQL and Elasticsearch provide data services; APISIX provides API gateway capabilities. Monitoring tools support observability.",
    features: ["Local multi-DC platform", "Terraform and Helm provisioning", "Kafka messaging", "PostgreSQL and Elasticsearch", "Failover concepts", "Monitoring"],
    technologies: ["Kubernetes", "Terraform", "Helm", "Kafka", "PostgreSQL", "Elasticsearch", "APISIX"],
    diagram: ["DC 01", "Gateway", "Kafka", "DC 02"], accent: "red", repo: "multi-dc-ecommerce-platform",
  },
  {
    id: "event-driven-serverless", category: "CLOUD / SERVERLESS / EVENT-DRIVEN",
    title: "Event-Driven Serverless", description: "An AWS order-processing platform built around asynchronous events, serverless functions, managed queues, and workflow orchestration.",
    overview: "A production-style order processing system using managed AWS services to model event-driven workflows.",
    objectives: ["Separate order intake from asynchronous processing.", "Coordinate service workflows with managed AWS components.", "Provide repeatable deployment definitions."],
    architecture: "API Gateway and Lambda accept requests; DynamoDB stores application data; EventBridge and SQS route asynchronous work; Step Functions orchestrates workflows and SNS supports notifications. Terraform and SAM define deployment.",
    features: ["Event-driven order processing", "Asynchronous messaging", "Step Functions orchestration", "Terraform and SAM definitions"],
    technologies: ["Go", "AWS", "Lambda", "API Gateway", "DynamoDB", "EventBridge", "SQS", "Step Functions", "SNS", "Terraform", "SAM"],
    diagram: ["API", "EventBridge", "Workflow", "DynamoDB"], accent: "blue", repo: "event-driven-serverless",
  },
];

export const secondaryRepositories = [
  "agentic-rag-langgraph", "rag-eval-gate", "sentiment-mlops-training", "dotnet-ci", "dataops-pipeline", "microservcices-shop-kubernetes", "observability-stack", "cloud-security-audit-automated-aws", "ml-model-cicd-pipeline", "iac-module-library", "grpc-feature-flag-service", "protobuf-grpc-buf-cli", "kotlin-ci-komga", "jfrog-supply-chain-xray-sbom",
].map((name) => ({ name, url: `${profile.github}/${name}` }));

export const expertise = [
  { number: "01", name: "Cloud & Serverless Engineering", description: "Define cloud-native services and event-driven workloads with repeatable infrastructure.", capabilities: ["Managed cloud services", "Serverless patterns", "Event-driven systems"], technologies: ["AWS", "Azure", "Lambda", "API Gateway", "EventBridge"] },
  { number: "02", name: "Kubernetes & Platform Engineering", description: "Build developer-facing capabilities and multi-tenant platforms on Kubernetes.", capabilities: ["Developer portals", "Infrastructure APIs", "Cluster tenancy"], technologies: ["Kubernetes", "Backstage", "Crossplane", "vCluster"] },
  { number: "03", name: "Infrastructure as Code & GitOps", description: "Keep infrastructure and delivery declarative, reviewable, and reconciled from source.", capabilities: ["Provisioning", "GitOps reconciliation", "Release ordering"], technologies: ["Terraform", "ArgoCD", "Helm", "Crossplane"] },
  { number: "04", name: "MLOps & AI Infrastructure", description: "Work on the operational foundations for retrieval systems and the model lifecycle.", capabilities: ["RAG infrastructure", "Feature management", "Model delivery and drift"], technologies: ["AWS Bedrock", "OpenSearch", "MLflow", "Feast", "Evidently"] },
  { number: "05", name: "DevSecOps & Cloud Security", description: "Integrate automated security checks and policy enforcement into delivery and infrastructure.", capabilities: ["Pipeline scanning", "Policy as code", "IAM controls"], technologies: ["OPA", "Gatekeeper", "SAST", "DAST", "SCA", "SBOM"] },
  { number: "06", name: "CI/CD & Automation", description: "Automate repeatable software and infrastructure delivery workflows.", capabilities: ["Build and release pipelines", "Infrastructure automation", "Deployment definitions"], technologies: ["Terraform", "SAM", "ArgoCD", "Python", "Go"] },
  { number: "07", name: "Observability & FinOps", description: "Make operating signals and infrastructure costs visible as part of platform design.", capabilities: ["Monitoring", "Drift visibility", "Cost allocation"], technologies: ["OpenCost", "Evidently", "SLOs"] },
  { number: "08", name: "Data & Event-Driven Architecture", description: "Connect distributed services through streams, queues, and managed data systems.", capabilities: ["Streaming and messaging", "Workflow orchestration", "Search and persistence"], technologies: ["Kafka", "SQS", "EventBridge", "PostgreSQL", "OpenSearch"] },
];

export const stackGroups = [
  { name: "Cloud", items: ["AWS", "Azure", "AWS Bedrock", "AWS EKS"] },
  { name: "Containers & orchestration", items: ["Kubernetes", "Docker", "Helm", "vCluster"] },
  { name: "Infrastructure as code", items: ["Terraform", "Crossplane", "AWS SAM"] },
  { name: "GitOps & platform", items: ["ArgoCD", "Backstage", "Crossplane"] },
  { name: "Security", items: ["OPA", "Gatekeeper", "SAST", "DAST", "SCA", "SBOM", "IAM"] },
  { name: "MLOps & AI", items: ["MLflow", "Feast", "LangGraph", "AWS Bedrock", "Evidently"] },
  { name: "Streaming & messaging", items: ["Kafka", "RabbitMQ", "SQS", "EventBridge", "SNS"] },
  { name: "Databases & search", items: ["PostgreSQL", "DynamoDB", "OpenSearch", "Elasticsearch"] },
  { name: "Programming & automation", items: ["Python", "Go", "Shell"] },
];

export const journey = [
  { type: "Experience", title: "Professional experience", organization: "Employer and role to be added", date: "Dates to be added", details: "Add responsibilities, technical environment, and verified outcomes here." },
  { type: "Education", title: "Education", organization: "Institution and qualification to be added", date: "Dates to be added", details: "Add education details here." },
  { type: "Certification", title: "Certifications", organization: "Certification details to be added", date: "Dates to be added", details: "Add only active, verified certifications here." },
];