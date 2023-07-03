import { ProjectInterface } from "@/common.types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
  name: string;
  avatarUrl: string;
  id:
};

const ProjectDetails = ({
  title,
  description,
  image,
  liveSiteUrl,
  githubUrl,
  category,
  name,
  avatarUrl,
}: Props) => {
  return (
    <section className="flexBetween gap-y-8 max-w-4xl max-xs:flex-col w-full">
      <div className="flex-1 flex items-start gap-5 w-full max-xs:flex-col">
        <Image
          src={avatarUrl}
          width={50}
          height={50}
          alt="avatar"
          className="rounded-full"
        />
      </div>

      <div className="flex-1 flexStart flex-col gap-1">
        <p className="self-start text-lg font-semibold">{title}</p>
        <div className="user-info">{name}</div>
      </div>

      <h3>{category}</h3>
  
      <Image src={image} width={1000} height={1000} alt="project image" />
      <div>
        <h3>{description}</h3>
        <Link href={githubUrl}>Github</Link>
        <span> * </span>
        <Link href={liveSiteUrl}>Live Site</Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
