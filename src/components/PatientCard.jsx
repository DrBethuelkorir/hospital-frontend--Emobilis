function PatientCard(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.gender}</p>
    </>
  );
}
export default PatientCard;
