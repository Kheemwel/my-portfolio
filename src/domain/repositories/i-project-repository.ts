import type { ProjectDetail } from '../entities/project-detail'
import type { ProjectSummary } from '../entities/project-summary'

export interface ProjectRepository {
  fetchRecentProjects(count: number): Promise<ProjectSummary[]>
  fetchHighlightProjects(): Promise<ProjectSummary[]>
  fetchProjects(): Promise<ProjectSummary[]>
  fetchProjectTitleList(): Promise<string[]>
  fetchProjectDetail(title: string): Promise<ProjectDetail>
}
