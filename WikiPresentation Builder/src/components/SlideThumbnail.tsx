import { GripVertical } from 'lucide-react';
import { useDrag, useDrop } from 'react-dnd';

export interface Slide {
  id: string;
  type: 'title' | 'content' | 'image' | 'split';
  title: string;
  content?: string;
  bulletPoints?: string[];
  imageUrl?: string;
}

interface SlideThumbnailProps {
  slide: Slide;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  onMove: (dragIndex: number, hoverIndex: number) => void;
}

export function SlideThumbnail({ slide, index, isSelected, onSelect, onMove }: SlideThumbnailProps) {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'SLIDE',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'SLIDE',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        onMove(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drop(node)}
      className={`group relative transition-all ${
        isDragging ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      <div
        onClick={onSelect}
        className={`border-2 rounded-lg overflow-hidden transition-all cursor-pointer ${
          isSelected 
            ? 'border-blue-600 shadow-md' 
            : 'border-slate-200 hover:border-slate-300'
        }`}
      >
        {/* Drag Handle */}
        <div
          ref={drag}
          className="absolute top-2 left-2 z-10 cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-all hover:scale-110 touch-none"
          title="Drag to reorder"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded p-1.5 shadow-md hover:shadow-lg border border-slate-200">
            <GripVertical className="h-4 w-4 text-slate-600" />
          </div>
        </div>

        {/* Slide Preview */}
        <div className="aspect-[16/10] bg-white p-3 flex items-center justify-center">
          {slide.type === 'title' && (
            <div className="text-center space-y-2 w-full">
              <div className="h-2 bg-slate-800 rounded w-3/4 mx-auto"></div>
              <div className="h-1.5 bg-slate-400 rounded w-1/2 mx-auto"></div>
            </div>
          )}
          {slide.type === 'content' && (
            <div className="space-y-1.5 w-full">
              <div className="h-1.5 bg-blue-600 rounded w-2/3"></div>
              <div className="space-y-1 mt-2">
                <div className="h-1 bg-slate-300 rounded w-full"></div>
                <div className="h-1 bg-slate-300 rounded w-full"></div>
                <div className="h-1 bg-slate-300 rounded w-4/5"></div>
              </div>
            </div>
          )}
          {slide.type === 'image' && (
            <div className="flex flex-col items-center justify-center space-y-1.5 w-full">
              <div className="h-1.5 bg-blue-600 rounded w-2/3"></div>
              <div className="w-16 h-10 bg-slate-200 rounded mt-1"></div>
            </div>
          )}
          {slide.type === 'split' && (
            <div className="flex gap-2 w-full">
              <div className="flex-1 space-y-1">
                <div className="h-1 bg-slate-300 rounded w-full"></div>
                <div className="h-1 bg-slate-300 rounded w-4/5"></div>
              </div>
              <div className="w-12 h-12 bg-slate-200 rounded"></div>
            </div>
          )}
        </div>

        {/* Slide Number */}
        <div className="bg-slate-50 px-2 py-1 border-t border-slate-200 text-center">
          <span className="text-slate-600 text-xs">{index + 1}</span>
        </div>
      </div>
    </div>
  );
}
