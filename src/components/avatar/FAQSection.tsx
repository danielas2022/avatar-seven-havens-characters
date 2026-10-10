import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '@/data/faqs';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-b border-border/40 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Everything You Need to Know About Avatar: Seven Havens
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Answers to common questions regarding the new Avatars Pavi and Nisha, voice cast, timeline post-Korra, and streaming details.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all ${
                  isOpen ? 'border-amber-500/50 bg-card shadow-sm' : 'border-border/60 bg-card/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-semibold text-sm sm:text-base text-foreground"
                >
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 mt-1 pt-3">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-2 text-[10px] uppercase font-bold text-amber-500/80 bg-amber-500/10 px-2 py-0.5 rounded">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
