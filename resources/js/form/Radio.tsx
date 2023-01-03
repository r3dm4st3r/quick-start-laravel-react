import { ErrorMessage, Field, useField } from 'formik';

function Radio({ options = [], ...props }) {
  const [field, meta] = useField(props['name']);
  const isInvalid = !!(meta.error && meta.touched);
  return (
    <div className="flex">
      <div className={`flex items-center gap-4 ${isInvalid ? 'is-invalid' : ''}`}>
        {options.map((option, i) => {
          return (
            <div className="radio" key={i}>
              <Field
                className={`form-control ${props['inputClass']}`}
                id={option}
                type="radio"
                name={field.name}
                value={option}
                checked={field.value === option}
              />
              <label htmlFor={option}> {option} </label>
            </div>
          );
        })}
      </div>
      <ErrorMessage component="div" className="text-danger text-xs mt-1" name={field.name} />
    </div>
  );
}

export default Radio;
