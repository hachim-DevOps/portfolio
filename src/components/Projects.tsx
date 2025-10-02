import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Kubernetes Multi-Cluster Management",
    description: "Automated deployment and management system for multiple Kubernetes clusters across different cloud providers using ArgoCD and Terraform.",
    tags: ["Kubernetes", "ArgoCD", "Terraform", "AWS"],
    github: "#",
    live: "#",
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Comprehensive CI/CD pipeline with automated testing, security scanning, and multi-environment deployments using GitLab CI and Jenkins.",
    tags: ["GitLab CI", "Jenkins", "Docker", "Ansible"],
    github: "#",
    live: "#",
  },
  {
    title: "Infrastructure Monitoring Platform",
    description: "Complete monitoring solution with Prometheus, Grafana, and custom dashboards for real-time infrastructure health tracking.",
    tags: ["Prometheus", "Grafana", "Node Exporter", "AlertManager"],
    github: "#",
    live: "#",
  },
  {
    title: "Serverless Microservices Architecture",
    description: "Scalable microservices deployment on AWS Lambda with API Gateway, DynamoDB, and automated scaling policies.",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
    github: "#",
    live: "#",
  },
  {
    title: "Security Hardening Automation",
    description: "Automated security compliance and vulnerability scanning system integrated into the deployment pipeline.",
    tags: ["Trivy", "SonarQube", "OWASP", "Vault"],
    github: "#",
    live: "#",
  },
  {
    title: "Log Aggregation System",
    description: "Centralized logging infrastructure using ELK Stack for collecting, analyzing, and visualizing application logs.",
    tags: ["Elasticsearch", "Logstash", "Kibana", "Filebeat"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my recent DevOps implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2 flex-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
