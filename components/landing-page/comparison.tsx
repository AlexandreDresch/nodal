"use client";

import type React from "react";

import { useState } from "react";
import { BarChart3, Clock, GripVertical } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Comparison() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;
    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;
    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="w-full py-20 bg-slate-950" id="comparison">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 flex-col items-start container mx-auto pb-8 px-4">
          <Badge
            variant="outline"
            className="border-teal-500 min-w-2xs text-teal-500 uppercase font-light tracking-widest"
          >
            Platform Comparison
          </Badge>

          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-6xl font-regular text-left text-white">
              See the difference
            </h2>
            <p className="text-lg max-w-xl lg:max-w-4xl leading-relaxed tracking-tight text-muted-foreground  text-left">
              Experience how Nodal transforms your delivery operations compared
              to manual management.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div
          className="relative aspect-video w-full h-auto max-h-[500px] overflow-hidden rounded-2xl select-none bg-black border border-gray-700"
          onMouseMove={onMouseMove}
          onMouseUp={() => setOnMouseDown(false)}
          onTouchMove={onMouseMove}
          onTouchEnd={() => setOnMouseDown(false)}
        >
          <div
            className="bg-teal-500 h-full w-1 absolute z-20 top-0 -ml-1 select-none"
            style={{
              left: inset + "%",
            }}
          >
            <button
              className="bg-teal-500 rounded-full hover:scale-110 transition-all w-8 h-8 select-none -translate-y-1/2 absolute top-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center shadow-lg"
              onTouchStart={(e) => {
                setOnMouseDown(true);
                onMouseMove(e);
              }}
              onMouseDown={(e) => {
                setOnMouseDown(true);
                onMouseMove(e);
              }}
              onTouchEnd={() => setOnMouseDown(false)}
              onMouseUp={() => setOnMouseDown(false)}
            >
              <GripVertical className="h-4 w-4 select-none text-white" />
            </button>
          </div>

          <div className="absolute left-0 top-0 w-full h-auto aspect-video rounded-2xl select-none bg-black flex flex-col  items-center p-8">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">Working Alone</h3>
              <div className="space-y-3 text-left max-w-md">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Manual route planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Phone calls for updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Higher fuel costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Spreadsheet management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Limited visibility</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute left-0 top-0 w-full h-auto aspect-video rounded-2xl select-none bg-slate-100 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - inset}% 0 0)`,
            }}
          >
            <div className="w-full h-full flex flex-col items-center p-8">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-black">
                  Working with Nodal
                </h3>
                <div className="space-y-3 text-left max-w-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-900">
                      Automated route optimization
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-900">
                      Real-time tracking & updates
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-900">30% cost reduction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-900">Analytics & insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-900">24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-4 left-4 z-30">
            <span
              className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-200"
              style={{
                opacity: inset > 15 ? 1 : 0,
              }}
            >
              With Nodal
            </span>
          </div>
          <div className="absolute top-4 right-4 z-30">
            <span
              className="border-2 border-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-200"
              style={{
                opacity: inset < 85 ? 1 : 0,
              }}
            >
              Without Nodal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
