import { FormEvent } from "react";
import TagInput from "components/forms/TagInput";
import FormButtons from "components/forms/FormButtons";
import { TagProp } from "lib/tagType";
interface MediumFormProps {
  inputs: any;
  tags: TagProp[];
  setTags: (tags: TagProp[]) => void;
  handleChange: (e: any) => void;
  handleSubmit: (e: FormEvent) => void;
}

//form template for Medium
const MediumFormTemplate: React.FC<MediumFormProps> = ({
  inputs,
  tags,
  setTags,
  handleChange,
  handleSubmit,
}) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              onChange={handleChange}
              autoFocus
              className="input"
              value={inputs.title || ""}
              type="text"
              name="title"
              placeholder="Enter title"
              maxLength={40}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Canonical URL</label>
          <div className="control">
            <input
              onChange={handleChange}
              className="input"
              value={inputs.url || ""}
              type="url"
              name="url"
              placeholder="Enter URL (if applicable)"
            />
          </div>
        </div>

        <div className="field" style={{ marginTop: "1vh" }}>
          <label className="label">Tags</label>
          <div className="control">
            <TagInput tags={tags} setTags={setTags} />
          </div>
        </div>

        <div className="field">
          <label className="label">Publish Status</label>
          <div className="control">
            <select
              className="select is-rounded"
              style={{ minWidth: "8vw" }}
              onChange={handleChange}
              value={inputs.publishStatus || ""}
              name="publishStatus"
            >
              <option value="public">public</option>
              <option value="draft">draft</option>
              <option value="unlisted">unlisted</option>
            </select>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control" style={{ margin: "2vh 0vw 1vh 0vw" }}>
            <FormButtons />
          </div>
        </div>
      </form>
    </section>
  );
};

export default MediumFormTemplate;
