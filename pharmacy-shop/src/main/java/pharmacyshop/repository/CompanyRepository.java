package pharmacyshop.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pharmacyshop.entity.Company;

import java.util.List;

@Repository
public interface CompanyRepository extends CrudRepository<Company, String> {

    @Query(value = "select company.companyName from Company company")
    List<String> findAllCompanyNames();

    @Query(value = "select company from Company company " +
            "left join fetch company.pharmClasses pharm_class " +
            "left join fetch pharm_class.medicines " +
            "where company.companyName = :name")
    Company findCompanyInfoByCompanyName(@Param("name") String companyName);
}
