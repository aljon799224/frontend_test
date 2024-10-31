import { Dispatch, SetStateAction } from "react";
import Select from "react-select";

const Controls = ({
  setSortField,
  setSortDirection,
}: {
  setSortField: Dispatch<SetStateAction<string>>;
  setSortDirection: Dispatch<SetStateAction<string>>;
}) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={(option) => option && setSortField(option.value || "")}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={(option) => option && setSortDirection(option.value || "")}
        />
      </div>
    </div>
  );
};

export default Controls;
