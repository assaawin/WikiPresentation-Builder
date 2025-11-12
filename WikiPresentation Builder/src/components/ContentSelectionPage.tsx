import { useState } from 'react';
import { GripVertical, ChevronRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { ScrollArea } from './ui/scroll-area';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface Section {
  id: string;
  title: string;
  content: string;
  selected: boolean;
}

interface ContentSelectionPageProps {
  topic: string;
  sections: Section[];
  onSectionsChange: (sections: Section[]) => void;
  onContinue: () => void;
  onBack: () => void;
}

interface DraggableSectionItemProps {
  section: Section;
  index: number;
  moveSection: (dragIndex: number, hoverIndex: number) => void;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
  selectedSectionId: string;
}

const DraggableSectionItem = ({ 
  section, 
  index, 
  moveSection, 
  onToggle, 
  onSelect,
  selectedSectionId 
}: DraggableSectionItemProps) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'SECTION',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'SECTION',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveSection(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drop(node)}
      className={`flex items-center gap-3 p-3 border rounded-lg transition-all ${
        isDragging ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
      } ${
        selectedSectionId === section.id 
          ? 'border-blue-500 bg-blue-50 shadow-sm' 
          : 'border-slate-200 hover:border-slate-300 bg-white'
      }`}
    >
      <div
        ref={drag}
        className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1 rounded transition-colors touch-none"
        title="Drag to reorder"
      >
        <GripVertical className="h-5 w-5" />
      </div>
      <Checkbox
        checked={section.selected}
        onCheckedChange={() => onToggle(section.id)}
        onClick={(e) => e.stopPropagation()}
      />
      <span 
        className="flex-1 text-slate-700 cursor-pointer"
        onClick={() => onSelect(section.id)}
      >
        {section.title}
      </span>
      {selectedSectionId === section.id && (
        <ChevronRight className="h-4 w-4 text-blue-600" />
      )}
    </div>
  );
};

export function ContentSelectionPage({
  topic,
  sections,
  onSectionsChange,
  onContinue,
  onBack,
}: ContentSelectionPageProps) {
  const [selectedSectionId, setSelectedSectionId] = useState(sections[0]?.id || '');

  const selectedSection = sections.find(s => s.id === selectedSectionId);
  const selectedCount = sections.filter(s => s.selected).length;

  const moveSection = (dragIndex: number, hoverIndex: number) => {
    const newSections = [...sections];
    const [draggedSection] = newSections.splice(dragIndex, 1);
    newSections.splice(hoverIndex, 0, draggedSection);
    onSectionsChange(newSections);
  };

  const toggleSection = (id: string) => {
    const newSections = sections.map(s => 
      s.id === id ? { ...s, selected: !s.selected } : s
    );
    onSectionsChange(newSections);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h2 className="text-slate-900">Select & Structure Content</h2>
              <p className="text-slate-600 text-sm">Topic: {topic}</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={onBack}>
                Back to Search
              </Button>
              <Button 
                onClick={onContinue}
                className="bg-blue-600 hover:bg-blue-700"
                disabled={selectedCount === 0}
              >
                Continue to Templates
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-2 gap-6">
          {/* Left Panel - Section List */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-200 bg-slate-50">
              <h3 className="text-slate-900">Table of Contents</h3>
              <p className="text-slate-600 text-sm mt-1">
                {selectedCount} section{selectedCount !== 1 ? 's' : ''} selected
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Drag the grip icon to reorder sections
              </div>
            </div>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <DraggableSectionItem
                    key={section.id}
                    section={section}
                    index={index}
                    moveSection={moveSection}
                    onToggle={toggleSection}
                    onSelect={setSelectedSectionId}
                    selectedSectionId={selectedSectionId}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Right Panel - Content Preview */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-200 bg-slate-50">
              <h3 className="text-slate-900">Content Preview</h3>
              <p className="text-slate-600 text-sm mt-1">
                {selectedSection?.title || 'Select a section to preview'}
              </p>
            </div>
            <ScrollArea className="flex-1 p-6">
              {selectedSection ? (
                <div className="prose prose-slate max-w-none">
                  <h4 className="text-slate-900">{selectedSection.title}</h4>
                  <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                    {selectedSection.content}
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                  Select a section from the left to view its content
                </div>
              )}
            </ScrollArea>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
