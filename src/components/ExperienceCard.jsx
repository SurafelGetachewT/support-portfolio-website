import Badge from "./Badge";
import Card from "./Card";
import { iconMap } from "./icons";

function ExperienceCard({ experience }) {
  const Icon = iconMap[experience.icon];

  return (
    <Card className="card-hover p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-white">
          <Icon size={22} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-navy-950">
            {experience.role}
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {experience.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <Badge key={skill} tone="navy">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ExperienceCard;
