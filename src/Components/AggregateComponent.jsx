function AggregateComponent({ allFormData }) {
    return (
      <div className="aggregate-component-form">
        <h2>Moving Cost Summary</h2>
        <pre>{JSON.stringify(allFormData, null, 2)}</pre>
      </div>
    );
  }
  
  export default AggregateComponent;