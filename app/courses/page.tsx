'use client';

import { useState } from 'react';
import Link from 'next/link';
import { coursesData, Course } from '@/lib/data';
import { Button } from '@/components/Button';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Tech', 'Data & AI', 'Career Skills', 'Business'];

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.toolsCovered.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/60 via-white to-white py-16 lg:py-20 border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
            Industry Training Programs
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Bootcamps Built for{" "}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Real-World Employability
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Hands-on cohorts taught live by senior practitioners. Build production portfolio applications, get code reviews, and crack target interviews.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses by skill (e.g. React, Python, AWS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-neutral-400 hover:text-neutral-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 bg-neutral-50/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200 p-8">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-neutral-800">No courses match your search</h3>
              <p className="text-sm text-neutral-500 mt-1">Try searching for other keywords or reset your filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs font-semibold text-blue-600 hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md">
                        {course.category}
                      </span>
                      {course.badge && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 bg-amber-100 text-amber-800 rounded">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                    </h3>

                    <p className="text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                      {course.tagline}
                    </p>

                    <div className="mt-4 flex items-center gap-3 text-xs text-neutral-600">
                      <span className="flex items-center gap-1 font-semibold text-amber-600">
                        ★ {course.rating}
                      </span>
                      <span className="text-neutral-400">({course.reviewCount} reviews)</span>
                      <span>•</span>
                      <span>{course.studentsCount}+ enrolled</span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-neutral-600 bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                      <div>
                        <span className="text-neutral-400 block text-[10px]">DURATION</span>
                        <span className="font-semibold text-neutral-800">{course.duration}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block text-[10px]">EFFORT</span>
                        <span className="font-semibold text-neutral-800">{course.hours}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1.5">
                        Tools Covered:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.toolsCovered.slice(0, 5).map((tool, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-mono"
                          >
                            {tool}
                          </span>
                        ))}
                        {course.toolsCovered.length > 5 && (
                          <span className="text-[11px] text-neutral-400 self-center">
                            +{course.toolsCovered.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-neutral-400 line-through mr-1.5">{course.originalPrice}</span>
                      <span className="text-xl font-extrabold text-neutral-900">{course.price}</span>
                    </div>
                    <Link href={`/courses/${course.slug}`}>
                      <Button className="text-xs px-4 py-2 font-semibold">
                        View Syllabus
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
