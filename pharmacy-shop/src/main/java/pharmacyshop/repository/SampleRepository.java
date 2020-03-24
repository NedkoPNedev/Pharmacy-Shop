package pharmacyshop.repository;

import org.springframework.data.repository.CrudRepository;
import pharmacyshop.entity.SampleEntity;

import java.util.Optional;

public interface SampleRepository extends CrudRepository<SampleEntity, Long> {

    Optional<SampleEntity> findFirstById(Long id);
}
