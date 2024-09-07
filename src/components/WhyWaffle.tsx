import QnA from './common/QnA';

const WhyWaffle = () => {
  const Answer = () => {
    return (
      <>
        <div>답변입니다.</div>
        <div>답변답변</div>
      </>
    );
  };

  return (
    <QnA
      question="와플스튜디오에서 배우고 싶은 것은 무엇인가요?"
      answer={<Answer />}
    />
  );
};

export default WhyWaffle;
