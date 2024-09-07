import QnA from './common/QnA';

const Career = () => {
  const Answer = () => {
    return (
      <>
        <div>답변입니다.</div>
        <div>답변답변</div>
      </>
    );
  };

  return <QnA question="그동안 무엇을 했나요?" answer={<Answer />} />;
};

export default Career;
