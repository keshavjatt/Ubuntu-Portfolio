import Image from 'next/image';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-4 w-20 md:w-28">
        <Image
          src="/keshav_pic.jpeg"
          alt="Keshav"
          className="w-full rounded-full"
          height={300}
          width={500}
        />
      </div>
      <div className="mb-6 mt-4 px-1 text-center text-lg md:mt-8 md:text-2xl">
        <div>
          Hi there, I&apos;m <span className="font-bold">Keshav! 👋</span>
        </div>
        <div className="ml-1 font-normal">
          A passionate{' '}
          <span className="font-bold text-orange-600">AI/ML Engineer 🤖🧠</span>{' '}
        </div>
      </div>
      <ul className="emoji-list mt-4 w-5/6 text-sm leading-tight tracking-tight md:w-3/4 md:text-base">
        <li className="list-alumnus">
          I&apos;m a{' '}
          <span className="font-medium">Computer Science student</span> and{' '}
          <span className="font-medium">AI/ML Enthusiast</span> with hands-on
          experience in{' '}
          <span className="text-orange-600">
            end-to-end machine learning projects 🚀
          </span>
          . I specialize in developing intelligent solutions from data
          processing to deployment. Here are my key specializations:
          <ul className="mt-2 list-inside list-disc">
            <li>
              <span className="text-orange-600">
                Interactive AI Applications:
              </span>{' '}
              Proficient in creating user-friendly web interfaces with Streamlit
              for ML model deployment and visualization.
            </li>
            <li>
              <span className="text-orange-600">Deep Learning Specialist:</span>{' '}
              Skilled in CNN architectures for computer vision tasks including
              medical image classification and analysis.
            </li>
            <li>
              <span className="text-orange-600">Database Integration:</span>{' '}
              Experienced with SQL and NoSQL databases for efficient data
              management in ML applications.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export { About };
