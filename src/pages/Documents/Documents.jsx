import React from 'react';
import { 
  FaFilePdf, 
  FaFileWord, 
  FaFileExcel, 
  FaFolder,
  FaDownload,
  FaEye,
  FaTrash,
  FaUpload,
  FaSearch
} from 'react-icons/fa';
import './Documents.css';

const Documents = () => {
  // Sample documents data
  const documents = [
    { id: 1, name: 'Employment Contract.pdf', type: 'PDF', category: 'Contracts', size: '2.5 MB', date: '2023-06-15' },
    { id: 2, name: 'NDA Agreement.docx', type: 'Word', category: 'Legal', size: '1.2 MB', date: '2023-05-20' },
    { id: 3, name: 'Salary Structure.xlsx', type: 'Excel', category: 'Financial', size: '3.1 MB', date: '2023-04-10' },
    { id: 4, name: 'Training Certificate.pdf', type: 'PDF', category: 'Certificates', size: '1.8 MB', date: '2023-03-05' },
  ];

  // Categories for filtering
  const categories = ['All', 'Contracts', 'Legal', 'Financial', 'Certificates', 'Payslips'];

  return (
    <div className="documents-container">
      <div className="documents-header">
        <div className="header-content">
          <h1><FaFolder /> Documents Repository</h1>
          <p>Access and manage your important documents and certificates</p>
        </div>
        <div className="header-stats">
          <div className="stat-card">
            <div className="stat-icon total">
              <FaFilePdf />
            </div>
            <div className="stat-info">
              <span className="stat-number">{documents.length}</span>
              <span className="stat-label">Total Documents</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon storage">
              <FaFolder />
            </div>
            <div className="stat-info">
              <span className="stat-number">8.6 GB</span>
              <span className="stat-label">Storage Used</span>
            </div>
          </div>
        </div>
      </div>

      <div className="documents-actions">
        <div className="search-filter">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search documents..." />
          </div>
          <div className="category-filter">
            {categories.map(category => (
              <button key={category} className="filter-btn">
                {category}
              </button>
            ))}
          </div>
        </div>
        <button className="upload-btn">
          <FaUpload /> Upload New Document
        </button>
      </div>

      <div className="documents-grid">
        {documents.map(document => (
          <div key={document.id} className="document-card">
            <div className="card-header">
              <div className={`file-icon ${document.type.toLowerCase()}`}>
                {document.type === 'PDF' ? <FaFilePdf /> :
                 document.type === 'Word' ? <FaFileWord /> :
                 <FaFileExcel />}
              </div>
              <div className="document-actions">
                <button className="action-btn view">
                  <FaEye />
                </button>
                <button className="action-btn download">
                  <FaDownload />
                </button>
                <button className="action-btn delete">
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className="card-content">
              <h3 className="document-name">{document.name}</h3>
              <div className="document-meta">
                <span className="category">{document.category}</span>
                <span className="size">{document.size}</span>
              </div>
              <div className="document-date">
                Uploaded: {new Date(document.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;