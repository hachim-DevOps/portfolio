import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Documentation = () => {
  const { projectId } = useParams();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <Link to="/">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            {language === 'fr' ? 'Retour' : 'Back'}
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {language === 'fr' ? 'Documentation du Projet' : 'Project Documentation'}
            </span>
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {language === 'fr' ? 'Vue d\'ensemble' : 'Overview'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'fr' 
                  ? 'Description détaillée du projet et de ses objectifs.'
                  : 'Detailed description of the project and its objectives.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {language === 'fr' ? 'Architecture' : 'Architecture'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'fr'
                  ? 'Architecture technique et diagrammes du système.'
                  : 'Technical architecture and system diagrams.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {language === 'fr' ? 'Technologies' : 'Technologies'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'fr'
                  ? 'Stack technologique et outils utilisés.'
                  : 'Technology stack and tools used.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {language === 'fr' ? 'Résultats & Impact' : 'Results & Impact'}
              </h2>
              <p className="text-muted-foreground">
                {language === 'fr'
                  ? 'Résultats obtenus et impact du projet.'
                  : 'Achieved results and project impact.'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
