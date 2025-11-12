import { useState } from 'react';
import { Bold, Italic, List, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Slide } from './SlideThumbnail';

interface SlideCanvasProps {
  slide: Slide;
  onUpdate: (slide: Slide) => void;
  templateColor: string;
}

export function SlideCanvas({ slide, onUpdate, templateColor }: SlideCanvasProps) {
  const [editingField, setEditingField] = useState<string | null>(null);

  const handleTitleChange = (value: string) => {
    onUpdate({ ...slide, title: value });
  };

  const handleContentChange = (value: string) => {
    onUpdate({ ...slide, content: value });
  };

  const handleBulletPointChange = (index: number, value: string) => {
    const newBulletPoints = [...(slide.bulletPoints || [])];
    newBulletPoints[index] = value;
    onUpdate({ ...slide, bulletPoints: newBulletPoints });
  };

  const addBulletPoint = () => {
    const newBulletPoints = [...(slide.bulletPoints || []), 'New bullet point'];
    onUpdate({ ...slide, bulletPoints: newBulletPoints });
  };

  const removeBulletPoint = (index: number) => {
    const newBulletPoints = slide.bulletPoints?.filter((_, i) => i !== index) || [];
    onUpdate({ ...slide, bulletPoints: newBulletPoints });
  };

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Toolbar */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 flex items-center gap-2">
        <Button variant="ghost" size="sm" className="h-8">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8">
          <List className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" className="h-6 mx-1" />
        <Button variant="ghost" size="sm" className="h-8">
          <ImageIcon className="h-4 w-4" />
        </Button>
      </div>

      {/* Canvas */}
      <div className="flex-1 p-8 overflow-auto">
        <div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg aspect-[16/10] p-12 flex flex-col"
          style={{ minHeight: '600px' }}
        >
          {slide.type === 'title' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
              <div 
                className="w-full p-4 rounded-lg"
                style={{ backgroundColor: `${templateColor}10` }}
              >
                {editingField === 'title' ? (
                  <Input
                    value={slide.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    onBlur={() => setEditingField(null)}
                    autoFocus
                    className="text-center border-none shadow-none text-3xl"
                    style={{ color: templateColor }}
                  />
                ) : (
                  <h1
                    onClick={() => setEditingField('title')}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ color: templateColor }}
                  >
                    {slide.title}
                  </h1>
                )}
              </div>
              <p className="text-slate-600 max-w-2xl">
                Click on any text element to edit
              </p>
            </div>
          )}

          {slide.type === 'content' && (
            <div className="flex flex-col h-full">
              {editingField === 'title' ? (
                <Input
                  value={slide.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  onBlur={() => setEditingField(null)}
                  autoFocus
                  className="border-none shadow-none text-2xl mb-6"
                  style={{ color: templateColor }}
                />
              ) : (
                <h2
                  onClick={() => setEditingField('title')}
                  className="cursor-pointer hover:opacity-80 transition-opacity mb-6"
                  style={{ color: templateColor }}
                >
                  {slide.title}
                </h2>
              )}

              <div className="space-y-3 flex-1">
                {slide.bulletPoints?.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: templateColor }}
                    ></div>
                    {editingField === `bullet-${index}` ? (
                      <Input
                        value={point}
                        onChange={(e) => handleBulletPointChange(index, e.target.value)}
                        onBlur={() => setEditingField(null)}
                        autoFocus
                        className="flex-1 border-slate-200"
                      />
                    ) : (
                      <p
                        onClick={() => setEditingField(`bullet-${index}`)}
                        className="flex-1 text-slate-700 cursor-pointer hover:text-slate-900 transition-colors"
                      >
                        {point}
                      </p>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeBulletPoint(index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-6 px-2 text-red-600 hover:text-red-700"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addBulletPoint}
                  className="mt-4"
                >
                  + Add Bullet Point
                </Button>
              </div>
            </div>
          )}

          {slide.type === 'image' && (
            <div className="flex flex-col h-full">
              {editingField === 'title' ? (
                <Input
                  value={slide.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  onBlur={() => setEditingField(null)}
                  autoFocus
                  className="border-none shadow-none text-2xl mb-6"
                  style={{ color: templateColor }}
                />
              ) : (
                <h2
                  onClick={() => setEditingField('title')}
                  className="cursor-pointer hover:opacity-80 transition-opacity mb-6"
                  style={{ color: templateColor }}
                >
                  {slide.title}
                </h2>
              )}

              <div className="flex-1 flex items-center justify-center">
                {slide.imageUrl ? (
                  <ImageWithFallback
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-slate-100 rounded-lg flex items-center justify-center mx-auto">
                      <ImageIcon className="h-12 w-12 text-slate-400" />
                    </div>
                    <p className="text-slate-500">Click to add an image</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {slide.type === 'split' && (
            <div className="flex flex-col h-full">
              {editingField === 'title' ? (
                <Input
                  value={slide.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  onBlur={() => setEditingField(null)}
                  autoFocus
                  className="border-none shadow-none text-2xl mb-6"
                  style={{ color: templateColor }}
                />
              ) : (
                <h2
                  onClick={() => setEditingField('title')}
                  className="cursor-pointer hover:opacity-80 transition-opacity mb-6"
                  style={{ color: templateColor }}
                >
                  {slide.title}
                </h2>
              )}

              <div className="flex gap-8 flex-1">
                <div className="flex-1">
                  {editingField === 'content' ? (
                    <Textarea
                      value={slide.content}
                      onChange={(e) => handleContentChange(e.target.value)}
                      onBlur={() => setEditingField(null)}
                      autoFocus
                      className="h-full resize-none"
                    />
                  ) : (
                    <p
                      onClick={() => setEditingField('content')}
                      className="text-slate-700 cursor-pointer hover:text-slate-900 transition-colors h-full"
                    >
                      {slide.content || 'Click to add content'}
                    </p>
                  )}
                </div>
                <div className="w-64">
                  {slide.imageUrl ? (
                    <ImageWithFallback
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-slate-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
