import { ArrowRight } from "lucide-react";

export default function InsightsSection() {
  const articles = [
    {
      category: "Top 5 reasons to invest in marketing",
      title: "David • Apr 3, 2024",
      categoryColor: "text-gray-900 font-bold"
    },
    {
      category: "How can marketing help your business?",
      title: "Alien • Apr 3, 2024",
      categoryColor: "text-gray-900 font-bold"
    },
    {
      category: "Business",
      title: "The ultimate guide to marketing success",
      subtitle: "Kevin • Apr 1, 2024",
      categoryColor: "text-gray-900 font-bold"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Gain valuable insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg">
              <div className="p-6">
                <h3 className={`text-lg mb-2 ${article.categoryColor}`}>
                  {article.category}
                </h3>
                {article.title && (
                  <p className="text-gray-600 text-sm">{article.title}</p>
                )}
                {article.subtitle && (
                  <p className="text-gray-600 text-sm mt-2">{article.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="text-green-700 font-medium flex items-center mx-auto">
            View more articles →
          </button>
        </div>
      </div>
    </div>
  );
}