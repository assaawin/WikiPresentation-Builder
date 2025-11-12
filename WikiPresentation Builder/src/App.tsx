import { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { ContentSelectionPage } from './components/ContentSelectionPage';
import { TemplateSelectionModal } from './components/TemplateSelectionModal';
import { EditorPage } from './components/EditorPage';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';
import type { Slide } from './components/SlideThumbnail';

type AppStage = 'landing' | 'content-selection' | 'template-selection' | 'editor';

interface Section {
  id: string;
  title: string;
  content: string;
  selected: boolean;
}

// Mock Wikipedia data for "The Water Cycle"
const mockSections: Section[] = [
  {
    id: 'intro',
    title: 'Introduction',
    content: 'The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. Water can change states among liquid, vapor, and solid at various stages of the cycle. This cycle has been working for billions of years, and all life on Earth depends on it.',
    selected: true,
  },
  {
    id: 'evaporation',
    title: 'Evaporation',
    content: 'Evaporation is the process by which water changes from a liquid to a gas or vapor. It is the primary pathway that water moves from the liquid state back into the water cycle as atmospheric water vapor. Studies have shown that the oceans, seas, lakes, and rivers provide nearly 90 percent of the moisture in our atmosphere via evaporation.',
    selected: true,
  },
  {
    id: 'condensation',
    title: 'Condensation',
    content: 'Condensation is the process by which water vapor in the air is changed into liquid water. Condensation is crucial to the water cycle because it is responsible for the formation of clouds. These clouds may produce precipitation, which is the primary route for water to return to the Earth\'s surface.',
    selected: true,
  },
  {
    id: 'precipitation',
    title: 'Precipitation',
    content: 'Precipitation is water released from clouds in the form of rain, freezing rain, sleet, snow, or hail. It is the primary connection in the water cycle that provides for the delivery of atmospheric water to the Earth. Most precipitation falls as rain.',
    selected: true,
  },
  {
    id: 'collection',
    title: 'Collection',
    content: 'Collection occurs when water that falls from the clouds as precipitation, collects in the oceans, rivers, lakes, and streams. This water is then available for evaporation, and the cycle continues. Some of the water infiltrates into the ground and becomes groundwater.',
    selected: true,
  },
  {
    id: 'transpiration',
    title: 'Transpiration',
    content: 'Transpiration is the process of water movement through a plant and its evaporation from aerial parts, such as leaves, stems and flowers. Water is necessary for plants but only a small amount of water taken up by the roots is used for growth and metabolism.',
    selected: false,
  },
  {
    id: 'importance',
    title: 'Importance to Life',
    content: 'The water cycle is essential for sustaining life on Earth. It regulates temperature, shapes landscapes, and provides fresh water for drinking, agriculture, and industry. Without the water cycle, life as we know it would not exist.',
    selected: true,
  },
];

// Images for the slides
const waterCycleImage = 'https://images.unsplash.com/photo-1738028449238-fa5ae8c33bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGN5Y2xlJTIwZGlhZ3JhbXxlbnwxfHx8fDE3NjI5NTIzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080';
const evaporationImage = 'https://images.unsplash.com/photo-1548970609-4506a57eac27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmFwb3JhdGlvbiUyMHdhdGVyfGVufDF8fHx8MTc2Mjk1MjM1M3ww&ixlib=rb-4.1.0&q=80&w=1080';
const precipitationImage = 'https://images.unsplash.com/photo-1643922379062-64106a0bd6d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluJTIwY2xvdWRzJTIwcHJlY2lwaXRhdGlvbnxlbnwxfHx8fDE3NjI5NTIzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080';

function generateSlidesFromSections(sections: Section[]): Slide[] {
  const selectedSections = sections.filter(s => s.selected);
  const slides: Slide[] = [];

  // Title slide
  slides.push({
    id: 'title-slide',
    type: 'title',
    title: 'The Water Cycle',
  });

  // Generate slides from selected sections
  selectedSections.forEach((section, index) => {
    if (section.id === 'intro') {
      // Introduction as content slide
      slides.push({
        id: `slide-${section.id}`,
        type: 'content',
        title: section.title,
        bulletPoints: [
          'Continuous movement of water on Earth',
          'Water changes states: liquid, vapor, and solid',
          'Essential for all life on Earth',
          'Operating for billions of years',
        ],
      });
    } else if (section.id === 'evaporation') {
      // Evaporation with image
      slides.push({
        id: `slide-${section.id}`,
        type: 'image',
        title: section.title,
        imageUrl: evaporationImage,
      });
      slides.push({
        id: `slide-${section.id}-content`,
        type: 'content',
        title: section.title,
        bulletPoints: [
          'Water changes from liquid to gas/vapor',
          'Primary pathway for atmospheric water vapor',
          'Oceans provide 90% of atmospheric moisture',
          'Driven by solar energy',
        ],
      });
    } else if (section.id === 'condensation') {
      slides.push({
        id: `slide-${section.id}`,
        type: 'content',
        title: section.title,
        bulletPoints: [
          'Water vapor changes to liquid water',
          'Responsible for cloud formation',
          'Clouds produce precipitation',
          'Returns water to Earth\'s surface',
        ],
      });
    } else if (section.id === 'precipitation') {
      slides.push({
        id: `slide-${section.id}`,
        type: 'split',
        title: section.title,
        content: 'Water released from clouds as rain, snow, sleet, or hail. Primary connection in the water cycle that delivers atmospheric water to Earth. Most precipitation falls as rain.',
        imageUrl: precipitationImage,
      });
    } else if (section.id === 'collection') {
      slides.push({
        id: `slide-${section.id}`,
        type: 'content',
        title: section.title,
        bulletPoints: [
          'Water collects in oceans, rivers, and lakes',
          'Becomes available for evaporation',
          'Some infiltrates ground as groundwater',
          'Cycle continues indefinitely',
        ],
      });
    } else if (section.id === 'importance') {
      slides.push({
        id: `slide-${section.id}`,
        type: 'content',
        title: section.title,
        bulletPoints: [
          'Essential for sustaining life on Earth',
          'Regulates global temperature',
          'Provides fresh water resources',
          'Shapes landscapes over time',
        ],
      });
    } else {
      // Default content slide
      slides.push({
        id: `slide-${section.id}`,
        type: 'content',
        title: section.title,
        bulletPoints: section.content.split('. ').slice(0, 3).map(s => s + '.'),
      });
    }
  });

  // Summary/conclusion slide
  slides.push({
    id: 'conclusion-slide',
    type: 'image',
    title: 'The Complete Water Cycle',
    imageUrl: waterCycleImage,
  });

  return slides;
}

export default function App() {
  const [stage, setStage] = useState<AppStage>('landing');
  const [searchQuery, setSearchQuery] = useState('');
  const [sections, setSections] = useState<Section[]>(mockSections);
  const [selectedTemplateId, setSelectedTemplateId] = useState('modern-lecture');
  const [slides, setSlides] = useState<Slide[]>([]);

  const templateColors: Record<string, string> = {
    'modern-lecture': '#2563eb',
    'classic-blackboard': '#1f2937',
    'colorful-classroom': '#f59e0b',
    'minimal-thesis': '#64748b',
    'scientific-journal': '#0891b2',
  };

  const handleBuildPresentation = () => {
    // In a real app, this would fetch Wikipedia data
    setStage('content-selection');
  };

  const handleContinueToTemplates = () => {
    setStage('template-selection');
  };

  const handleContinueToEditor = () => {
    const generatedSlides = generateSlidesFromSections(sections);
    setSlides(generatedSlides);
    setStage('editor');
    toast.success('Presentation Created!', {
      description: `${generatedSlides.length} slides generated. You can now edit and customize your presentation.`,
    });
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplateId(templateId);
    const templateName = {
      'modern-lecture': 'Modern Lecture',
      'classic-blackboard': 'Classic Blackboard',
      'colorful-classroom': 'Colorful Classroom',
      'minimal-thesis': 'Minimal Thesis',
      'scientific-journal': 'Scientific Journal',
    }[templateId];
    toast.success('Template Selected', {
      description: `${templateName} template applied.`,
    });
  };

  const handleBackToSearch = () => {
    setStage('landing');
    setSearchQuery('');
    setSections(mockSections);
  };

  const handleBackToContentSelection = () => {
    setStage('content-selection');
  };

  const handleQuickNavigate = (targetStage: 'search' | 'customize' | 'export') => {
    switch (targetStage) {
      case 'search':
      case 'customize':
        // Both lead to content selection with Water Cycle pre-loaded
        setSearchQuery('The Water Cycle');
        setStage('content-selection');
        toast.success('Demo Content Loaded', {
          description: 'The Water Cycle has been pre-loaded. Customize the sections as needed.',
        });
        break;
      case 'export':
        // Generate demo presentation and go to editor
        setSearchQuery('The Water Cycle');
        const demoSlides = generateSlidesFromSections(sections);
        setSlides(demoSlides);
        setStage('editor');
        toast.success('Demo Presentation Created!', {
          description: `${demoSlides.length} slides generated. Click Export to download your presentation.`,
        });
        break;
    }
  };

  return (
    <>
      <div className="min-h-screen">
        {stage === 'landing' && (
          <LandingPage
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onBuildPresentation={handleBuildPresentation}
            onQuickNavigate={handleQuickNavigate}
          />
        )}

        {stage === 'content-selection' && (
          <ContentSelectionPage
            topic={searchQuery || 'The Water Cycle'}
            sections={sections}
            onSectionsChange={setSections}
            onContinue={handleContinueToTemplates}
            onBack={handleBackToSearch}
          />
        )}

        {stage === 'template-selection' && (
          <TemplateSelectionModal
            open={true}
            selectedTemplateId={selectedTemplateId}
            onSelectTemplate={handleTemplateSelect}
            onContinue={handleContinueToEditor}
            onBack={handleBackToContentSelection}
            onOpenChange={(open) => {
              if (!open) {
                handleBackToContentSelection();
              }
            }}
          />
        )}

        {stage === 'editor' && (
          <EditorPage
            slides={slides}
            onSlidesChange={setSlides}
            templateColor={templateColors[selectedTemplateId]}
            onBack={handleBackToSearch}
          />
        )}
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}
