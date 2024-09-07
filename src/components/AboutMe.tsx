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

  return <QnA question="질문입니다." answer={<Answer />} />;
};

export default AboutMe;
