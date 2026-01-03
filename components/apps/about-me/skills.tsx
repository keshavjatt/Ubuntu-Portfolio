import cls from 'classnames';

import {
  pythonStack,
  mlTools,
  deploymentTools,
  databases,
} from '@/data/skills';

interface SectionProps {
  title: string;
  gradientFrom: string;
  gradientTo: string;
  items: { id: string; name: string; image: string }[];
}

const Section = ({ title, gradientFrom, gradientTo, items }: SectionProps) => {
  // Define gradient classes based on the section
  const getGradientClass = (from: string, to: string) => {
    if (from === 'rgb(76,175,80)' && to === 'rgb(139,195,74)') {
      return 'bg-gradient-to-r from-green-500 to-green-400';
    } else if (from === 'rgb(255,87,34)' && to === 'rgb(255,193,7)') {
      return 'bg-gradient-to-r from-orange-500 to-yellow-400';
    } else if (from === 'rgb(33,150,243)' && to === 'rgb(3,169,244)') {
      return 'bg-gradient-to-r from-blue-500 to-cyan-400';
    } else if (from === 'rgb(156,39,176)' && to === 'rgb(233,30,99)') {
      return 'bg-gradient-to-r from-purple-600 to-pink-500';
    }
    return 'bg-gradient-to-r from-blue-500 to-cyan-400';
  };

  return (
    <div>
      <div
        className={cls(
          'mb-2 text-xl font-extrabold text-transparent md:text-center',
          getGradientClass(gradientFrom, gradientTo),
          'bg-clip-text',
        )}
      >
        {title}
      </div>
      <div className="flex flex-wrap gap-4 md:items-center md:justify-center">
        {items.map((item) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.id}
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-5">
        <div className="mb-10 text-center text-2xl font-bold text-orange-600 md:text-3xl">
          Skills & Technologies
        </div>
        <div className="-my-6">
          <ul className="mt-2 list-inside list-disc">
            <li>
              My primary expertise lies in{' '}
              <span className="text-orange-600">Python</span> for{' '}
              <span className="text-orange-600">Machine Learning</span> and{' '}
              <span className="text-orange-600">Data Science</span>.
            </li>
            <li>
              I specialize in building{' '}
              <span className="text-orange-600">end-to-end ML pipelines</span>,
              from data preprocessing to model deployment.
            </li>
            <li>
              Proficient in{' '}
              <span className="text-orange-600">deep learning</span> with{' '}
              <span className="text-orange-600"> TensorFlow/Keras</span> for
              computer vision and neural network applications.
            </li>
            <li>
              xperienced in creating{' '}
              <span className="text-orange-600">
                interactive web applications
              </span>{' '}
              with <span className="text-orange-600">Streamlit</span> for ML
              model deployment and visualization.
            </li>
            <li>
              Skilled in modern{' '}
              <span className="text-orange-600">AI development tools</span> like
              Cursor, Warp Terminal, and Windsurf for efficient coding
              workflows.
            </li>
            <li>
              I have hands-on experience with a comprehensive range of AI/ML
              technologies:
            </li>
          </ul>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <Section
                title="Python & ML Stack"
                gradientFrom="rgb(76,175,80)"
                gradientTo="rgb(139,195,74)"
                items={pythonStack}
              />
              <Section
                title="AI Development Tools"
                gradientFrom="rgb(255,87,34)"
                gradientTo="rgb(255,193,7)"
                items={mlTools}
              />
            </div>
            <div className="space-y-8">
              <Section
                title="Deployment & Web"
                gradientFrom="rgb(33,150,243)"
                gradientTo="rgb(3,169,244)"
                items={deploymentTools}
              />
              <Section
                title="Databases"
                gradientFrom="rgb(156,39,176)"
                gradientTo="rgb(233,30,99)"
                items={databases}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Skills };
