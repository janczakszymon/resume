import type { IProjectLink } from '~/interface/project/IProjectLink';

export interface IProjectDetails {
	name: string;
	fullName: string;
	description: string;
	links: IProjectLink[];
	images: string[];
}
