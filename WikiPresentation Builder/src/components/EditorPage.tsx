import { useState } from 'react';
import { 
  ChevronDown, 
  Plus, 
  FileText, 
  Palette, 
  Image as ImageIcon,
  Shapes,
  Download,
  Save,
  ArrowLeft
} from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { SlideThumbnail, type Slide } from './SlideThumbnail';
import { SlideCanvas } from './SlideCanvas';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { toast } from 'sonner@2.0.3';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

interface EditorPageProps {
  slides: Slide[];
  onSlidesChange: (slides: Slide[]) => void;
  templateColor: string;
  onBack: () => void;
}

export function EditorPage({ slides, onSlidesChange, templateColor, onBack }: EditorPageProps) {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  const moveSlide = (dragIndex: number, hoverIndex: number) => {
    const newSlides = [...slides];
    const [draggedSlide] = newSlides.splice(dragIndex, 1);
    newSlides.splice(hoverIndex, 0, draggedSlide);
    onSlidesChange(newSlides);
    
    // Update selected index if needed
    if (selectedSlideIndex === dragIndex) {
      setSelectedSlideIndex(hoverIndex);
    } else if (selectedSlideIndex === hoverIndex) {
      setSelectedSlideIndex(dragIndex > hoverIndex ? hoverIndex + 1 : hoverIndex - 1);
    }
  };

  const updateSlide = (updatedSlide: Slide) => {
    const newSlides = [...slides];
    newSlides[selectedSlideIndex] = updatedSlide;
    onSlidesChange(newSlides);
  };

  const addSlide = (type: 'content' | 'image' | 'split') => {
    const newSlide: Slide = {
      id: `slide-${Date.now()}`,
      type,
      title: 'New Slide Title',
      ...(type === 'content' && { bulletPoints: ['Point 1', 'Point 2', 'Point 3'] }),
      ...(type === 'split' && { content: 'Add your content here...' }),
    };
    onSlidesChange([...slides, newSlide]);
    setSelectedSlideIndex(slides.length);
    
    const slideTypeNames = {
      'content': 'Content Slide',
      'image': 'Image Slide',
      'split': 'Split Layout Slide'
    };
    toast.success('Slide Added', {
      description: `${slideTypeNames[type]} has been added to your presentation.`,
    });
  };

  const addCitation = () => {
    const citation = 'Source: Wikipedia. Retrieved November 12, 2025.';
    toast.success('Citation Added', {
      description: citation,
    });
  };

  const handleExport = (format: string) => {
    toast.success('Export Started', {
      description: `Your presentation is being prepared as ${format}. Happy teaching!`,
    });
  };

  const handleSave = () => {
    toast.success('Project Saved', {
      description: 'Your presentation has been saved successfully.',
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen flex flex-col bg-slate-50">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Search
            </Button>
            <div className="h-6 w-px bg-slate-300"></div>
            <h3 className="text-slate-900">WikiPresentation Builder</h3>
          </div>

          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Button variant="outline" size="sm" onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Project
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>Save your work for later</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Button variant="outline" size="sm" onClick={addCitation}>
                    <FileText className="h-4 w-4 mr-2" />
                    Add Citation
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>Add Wikipedia source citation</TooltipContent>
            </Tooltip>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => handleExport('PowerPoint (.pptx)')}>
                  <Download className="h-4 w-4 mr-2" />
                  Download as PowerPoint (.pptx)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('Google Slides')}>
                  <Download className="h-4 w-4 mr-2" />
                  Save to Google Slides
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('PDF')}>
                  <Download className="h-4 w-4 mr-2" />
                  Export as PDF
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Main Editor Layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Slide Thumbnails */}
          <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
            <div className="p-4 border-b border-slate-200">
              <h4 className="text-slate-900 mb-1">Slides</h4>
              <p className="text-xs text-slate-500 mb-3">Hover & drag to reorder</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Slide
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem onClick={() => addSlide('content')}>
                    <FileText className="h-4 w-4 mr-2" />
                    Content Slide
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => addSlide('image')}>
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Image Slide
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => addSlide('split')}>
                    <Shapes className="h-4 w-4 mr-2" />
                    Split Layout Slide
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <ScrollArea className="flex-1 p-3">
              <div className="space-y-3">
                {slides.map((slide, index) => (
                  <SlideThumbnail
                    key={slide.id}
                    slide={slide}
                    index={index}
                    isSelected={index === selectedSlideIndex}
                    onSelect={() => setSelectedSlideIndex(index)}
                    onMove={moveSlide}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Center Panel - Slide Canvas */}
          <div className="flex-1 overflow-hidden">
            <SlideCanvas
              slide={slides[selectedSlideIndex]}
              onUpdate={updateSlide}
              templateColor={templateColor}
            />
          </div>

          {/* Right Panel - Design & Tools */}
          <div className="w-80 bg-white border-l border-slate-200 flex flex-col">
            <Tabs defaultValue="design" className="flex-1 flex flex-col">
              <TabsList className="w-full rounded-none border-b border-slate-200 bg-transparent p-0">
                <TabsTrigger 
                  value="design" 
                  className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
                >
                  <Palette className="h-4 w-4 mr-2" />
                  Design
                </TabsTrigger>
                <TabsTrigger 
                  value="media"
                  className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Media
                </TabsTrigger>
                <TabsTrigger 
                  value="elements"
                  className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
                >
                  <Shapes className="h-4 w-4 mr-2" />
                  Elements
                </TabsTrigger>
              </TabsList>

              <TabsContent value="design" className="flex-1 m-0 p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-900 mb-3">Template</h4>
                    <Button variant="outline" className="w-full justify-start">
                      Change Template
                    </Button>
                  </div>

                  <div>
                    <h4 className="text-slate-900 mb-3">Colors</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {['#2563eb', '#f59e0b', '#10b981', '#8b5cf6', '#ef4444'].map((color) => (
                        <button
                          key={color}
                          className="w-10 h-10 rounded-lg border-2 border-slate-200 hover:border-slate-400 transition-colors"
                          style={{ backgroundColor: color }}
                          onClick={() => {}}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-slate-900 mb-3">Background</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        Solid Color
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        Gradient
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        Image
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="media" className="flex-1 m-0 p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-900 mb-3">Add Media</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        Upload Image
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        Search Stock Photos
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-slate-900 mb-3">Recent Images</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-square bg-slate-100 rounded-lg"></div>
                      <div className="aspect-square bg-slate-100 rounded-lg"></div>
                      <div className="aspect-square bg-slate-100 rounded-lg"></div>
                      <div className="aspect-square bg-slate-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="elements" className="flex-1 m-0 p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-slate-900 mb-3">Add Elements</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        Text Box
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        Shape
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        Icon
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        Chart
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-slate-900 mb-3">Quick Icons</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <button
                          key={i}
                          className="aspect-square bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center"
                        >
                          <Shapes className="h-5 w-5 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
