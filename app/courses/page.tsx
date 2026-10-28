'use client';

import { useState } from 'react';
import Link from 'next/link';
import { coursesData } from '@/lib/data';
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
      <section className="bg-surface border-b border-border pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-16 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            Industry Training Programs
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            Bootcamps Built for{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
              Real-World Employability
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
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
                className="w-full px-4 py-3 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground shadow-sm focus:ring-2 focus:ring-primary focus:outline-none text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-muted-foreground hover:text-foreground font-semibold"
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
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-sm scale-105'
                    : 'bg-card text-muted-foreground border border-border hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20 bg-background transition-colors flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-3xl border border-border p-8">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-foreground">No courses match your search</h3>
              <p className="text-xs text-muted-foreground mt-1">Try searching for other keywords or reset your filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs font-bold text-primary hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-card rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md">
                        {course.category}
                      </span>
                      {course.badge && (
                        <span className="text-[11px] font-bold px-2 py-0.5 bg-accent/15 text-accent border border-accent/20 rounded">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                    </h3>

                    <p className="text-xs text-muted-foreground mt-2.5 line-clamp-2 leading-relaxed">
                      {course.tagline}
                    </p>

                    <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 font-bold text-amber-500">
                        ★ {course.rating}
                      </span>
                      <span>({course.reviewCount} ratings)</span>
                      <span>•</span>
                      <span>{course.studentsCount}+ grads</span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2 text-xs bg-muted/40 p-3 rounded-xl border border-border/60">
                      <div>
                        <span className="text-muted-foreground block text-[10px] font-bold">DURATION</span>
                        <span className="font-bold text-foreground">{course.duration}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[10px] font-bold">LIVE EFFORT</span>
                        <span className="font-bold text-foreground">{course.hours}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-2">
                        Technologies Covered:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.toolsCovered.slice(0, 5).map((tool, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2 py-0.5 rounded bg-muted text-foreground font-mono font-semibold"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0 border-t border-border mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground line-through mr-1.5 font-medium">
                        {course.originalPrice}
                      </span>
                      <span className="text-xl font-black text-foreground">{course.price}</span>
                    </div>
                    <Link href={`/courses/${course.slug}`}>
                      <Button size="sm">View Syllabus</Button>
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
