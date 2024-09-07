import QnA from './common/QnA';

const AboutMe = () => {
  const Answer = () => {
    return (
      <>
        <div>답변입니다.</div>
        <div>답변답변</div>
      </>
    );
  };

  return <QnA question="당신은 누구인가요?" answer={<Answer />} />;
};

export default AboutMe;
