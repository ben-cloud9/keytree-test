import React from 'react';
import { format } from 'date-fns';
import { IRepo } from '../../store/types/types';
import './RepoListItem.scss';

interface IRepoListItemProps {
    repo: IRepo
}

const RepoListItem = ({ repo }: IRepoListItemProps) => (
    
    <div className="repo-list-item">
        <h6 className="repo-list-item__title">{repo.name}</h6>
        <p className="repo-list-item__description">{repo.description}</p>
        <ul className="repo-list-item__meta">
            <li><a href={repo.html_url}>View on GitHub</a></li>
            <li>Want to contribute?<br/><code>git clone {repo.clone_url}</code></li>
            <li>Last updated - {format(new Date(repo.pushed_at), 'DD/MM/YYYY hh:mm a')}</li>
        </ul>
    </div>
    
)

export default RepoListItem;
