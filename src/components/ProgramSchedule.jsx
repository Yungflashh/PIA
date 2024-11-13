import '../styles/ProgramSchedule.css';

// ProgramItem Component
const ProgramItem = ({ time, title, speaker }) => (
  <div className="program-item">
    <div className="time">{time}</div>
    <div className="event-title">
      <strong>{title}</strong>
    </div>
    {speaker && <div className="speaker">By: {speaker}</div>}
  </div>
);

// Main ProgramSchedule Component
const ProgramSchedule = () => {
  const programData = [
    { time: '1.', title: 'Declaration/Declare the Program Open', speaker: 'Proph. E.O Olaseinde Adenusi (JP)' },
    { time: '2.', title: 'Energetic Praises', speaker: 'Evg. Ruth - 20Mins' },
    { time: '3.', title: 'Giving Thanks to the God Almighty', speaker: 'Pastor Manbami-5Mins' },
    { time: '4.', title: 'Know our Guest Artists in a Role', speaker: 'Pastor Agbaje- 5Mins' },
    { time: '5.', title: 'TVC Choir Ministration (Host Choir)', speaker: '', speakerDetails: '10Mins' },
    { time: '6.', title: 'TVC Juvenile Choir Ministration', speaker: '', speakerDetails: '10Mins' },
    { time: '7.', title: 'TVC Youths/Teenagers Ministration', speaker: '', speakerDetails: '10Mins' },
    { time: '8.', title: 'TVC Good Women Choir Ministration', speaker: '', speakerDetails: '10Mins' },
    { time: '9.', title: 'Special Ministration by Invited Choirs', speaker: '', speakerDetails: '40Mins' },
    { time: '10.', title: 'Introduction', speaker: '' },
    { time: '11.', title: 'GENERAL OVERSEER’S SESSION', speaker: '' },
    { time: '12.', title: 'Guest Artists Ministration', speaker: '', speakerDetails: '60Mins' },
    { time: '13.', title: 'TVC Choir Ministration (Host Choir)', speaker: '', speakerDetails: '10Mins' },
    { time: '14.', title: 'Special Ministration by Invited Choirs', speaker: '', speakerDetails: '40Mins' },
    { time: '15.', title: 'Guest Artists Ministration', speaker: '', speakerDetails: '60Mins' },
    { time: '16.', title: 'Guest Artists Ministration', speaker: '', speakerDetails: '60Mins' },
    { time: '17.', title: 'Special Ministration by Invited Choirs', speaker: '', speakerDetails: '40Mins' },
    { time: '18.', title: 'Guest Artists Ministration', speaker: '', speakerDetails: '60Mins' },
    { time: '19.', title: 'Special Ministration by Invited Choir', speaker: '', speakerDetails: '20Mins' },
    { time: '20.', title: 'GENERAL OVERSEER’S SESSION', speaker: '' },
    { time: '21.', title: 'Benediction I, Benediction II, Benediction III', speaker: 'Senior Pastor Adenusi T.T.' },
  ];

  return (
    <div className="program-schedule">
      <h1 id='h1'>TOWER OF VICTORY CHURCH INTERNATIONAL</h1>
      <h2 id='h2'>PRAISE IN ADVANCE 2024 (SEASON 23)</h2>
      <div className="schedule-list">
        {programData.map((item, index) => (
          <ProgramItem key={index} time={item.time} title={item.title} speaker={item.speaker} />
        ))}
      </div>
    </div>
  );
};

export default ProgramSchedule;
